// import RegisterForAlerts from "./main.js";
const os = require('os');
let currentCallback = [];

const intervalId = setInterval(() => {
        const currentFreeMem = os.freemem() / 1024 / 1024;
        if (currentFreeMem < 2000) {
            //    for(let i = 0; i < currentCallback.length; i++){
            //     currentCallback[i](`Slobodno je samo ${currentFreeMem}`)
            currentCallback.forEach((e, i) => {
                currentCallback[i](`Slobodno je samo ${currentFreeMem}`)
            });

        }
        console.log(currentFreeMem);

    },
    1000)

const registerForAlerts = (callbackFunction) => {
    currentCallback.push(callbackFunction);
}


const myStopFunction = () => {
    clearInterval(intervalId);
}

module.exports.registerForAlerts = registerForAlerts;
module.exports.myStopFunction = myStopFunction;



///////////////////