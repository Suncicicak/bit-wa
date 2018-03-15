const memoryInfo = require("./memoryInfo.js");
const figlet = require("figlet");

memoryInfo.registerForAlerts((message) => {
    figlet(message, function(err, data) {
        console.log(data)
    });
})

setTimeout(() => {
    memoryInfo.myStopFunction();
},6000);

// function log (m) {
//     console.log(m)
// }

// memoryInfo.registerForAlerts(log);