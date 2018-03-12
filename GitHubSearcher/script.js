const searchInput = $(".js-search");
const btnInput = $('.js-btn');
var userImgInput = $('.user-img');
var usernameInput = $('.username');
const container = $('<div class="container"></div>');
const row = $('<div class="row"></div>');
$('main').append(container);
container.append(row);

btnInput.on('click', function () {
    const searchInputValue = searchInput.val();

    const request = $.ajax({
        url: `https://api.github.com/search/users?q=${searchInputValue}`,
        method: "GET"
    });

    request.done(function (response) {
            console.log(response);
            var users = response.items;
            var userImgs = [];
            var usersUN = [];

            for (let i = 0; i < users.length; i++) {
                usersUN.push(users[i].login);
                userImgs.push(users[i].avatar_url);
            }

            for (let i = 0; i < 6; i++) {
                const div = $(`<div class="col-lg-4 box"><img class="user-img" src="${userImgs[i]}"/><p>${usersUN[i]}</p></div>`);

                row.append(div);
            }

        console.log(userImgs, usersUN);
    });

request.fail(function (jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
});
})