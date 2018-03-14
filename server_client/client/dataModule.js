class Post {
    constructor(id, title, lead) {
        this.id = id;
        this.title = title;
        this.lead = lead;
    }

    fetchPosts(success) {
        fetch('http://127.0.0.1:3000/')
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                success(res);
            })
    }
}

module.exports = Post;