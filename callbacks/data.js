var getMovie = function(url, handleMovie) {
    fetch(url)
        .then(function(httpResponse){
            return httpResponse.json();
        })
        .then(function(rawMoviObject) {
            
            ///KONSTRUKTOR ////
            handleMovie({
                name: rawMoviObject.name,
                id: rawMoviObject.id
            });
        })
}