// for (let i = 0; i < 100; i++) {

// }
function bla(){
    const id = 5;
    return id;
}

let p = new Promise((resolve, reject) => {
    setTimeout(function(){
        bla();
        resolve();
    }, Math.random()*490+10)
});

p.then(function() {
    console.log(p);
});