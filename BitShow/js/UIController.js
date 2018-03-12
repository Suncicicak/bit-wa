    const first50 = function ({
        url,
        name,
        id
    })
    
    {
        $('#div').append('<div id=' + id + ' class="card col-4" style="width: 18rem;"><a href="single.html" ><img class="card-img-top" src="' + url + '"alt="Card image cap"><div class="card-body"><p class="card-text">' + name + '</p></a></div>')
    };

    const appendLi = function (param) {
        let empty = $('#seasonsUl');
        param.forEach(element => {
            empty.append('<li>' + element.startDate + " " + element.endDate + '</li>');
        });

    }
    const appendCast = function (param) {
        let empty = $('#castUl');
        param.forEach(element => {
            empty.append('<li>' + element + '</li>');
        });

    }


    const singleShow = function (imgageUrl, name, seasons, cast, details, param, param2) {
        $('#poster').attr('src', imgageUrl);
        $('#single-h2').html("" + name);
        $('#seasons').html("Seasons (" + seasons.length + ")");
        appendLi(param);
        appendCast(param2);
        $('#details').html("" + details);
    }

    const searchShow = function (name) {
        let li = $("#select").find('li').len;
        if (li <= 10) {
            $("#select").append("<li class='li'>" + name + "</li>")
        }
    }

    const showSearch = function () {
        $("#select").html("")
    }


    export {
        first50,
        singleShow,
        searchShow,
        showSearch,
        appendCast
    }