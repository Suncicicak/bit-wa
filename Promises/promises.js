const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)
        }, Math.random() * 500)
    }));
}

// var promise = Promise.race(arr)
// promise.then(function(id) {
//     console.log(id);

// });

for (let i = 0; i < 100; i++) {
    var x = new Promise((resolve, reject) => {
        setTimeout(() => {   
        if (i < 50) {
                reject("rejected");
            } else {
                resolve();
            }
        })
    });

    x.then(function () {
        console.log('Correct input');
        
    }, function (err) {    
        console.log('Invalid input: ' + err);
        
    });
    
    x.catch(function(e){
        console.log("catch: " + e)
    })
}




// arr.map(promise => {
//     promise.race((id) => {
//         console.log(id);

//     });
// });