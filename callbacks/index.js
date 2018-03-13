// var handleRealMovieObject = function(movie) {
//     console.log("name: " + movie.name)
// };

// dataModule.getMovie("http...", handleRealMovieObject);










// ////////

// ///data module///
//1 nacin
// var getM = function(url, handlemovie) {
//     fetch(url) 
//         .then(function(response) {
//             return response.json()
//         } )
//         .then(function(rawM) {
//             var movie = {
//                 name: rawM.name,
//                 id: rawM.id
//             };
//             handlemovie(movie);
//         })
// }

// // export getM

// //// main ////

// // import getM ;

// var handler = function(movie) {
//     console.log(movie);
    
// }


// dataModule.getM("http://smth.com", handler)


// ////////////
// //data module

// const something = (url, handlemovie) => {
//     fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (x) {
//         var y = {
//            name: x.name,
//            genre: x.genre 
//         }
//         handlemovie(y);
//     })
// }

// /////

// //main///

// const whatEver = (movie) => {
//     console.log(movie);
// }



// dataModule.something('http...', whatEver);


// ////



// var f = function(a) {
//     console.log(a*a);
    
// }


// var b = function(x,y) {
//     y(x+2);
// }

// var h = b(2, f);
/////////////////
//2. nacin
const something = (url) => {
    return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (x) {
                var y = {
                    name: x.name,
                    genre: x.genre 
                }
                
                return y;
            })
}

/////

//main///
const promise = something('http://api.tvmaze.com/shows/4');

promise.then((y) => {
    console.log(y)
})