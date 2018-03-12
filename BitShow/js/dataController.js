    const data = {
        showList: []
    }

    class Show {
        constructor(name, imageUrl, ID, detalis) {
            this.name = name,
                this.imageUrl = imageUrl,
                this.ID = ID,
                this.seasons = [],
                this.casts = [],
                this.detalis = detalis
        }
        addSeason(season) {
            this.seasons.push(season);
        }
        addCast(actor) {
            this.casts.push(actor);
        }
    }

    class TVShows {
        constructor(show, limitNumber) {

            this.limitNumber = limitNumber
        }
    }
    ///////

    class FirstPageShow {
        constructor(show, imgUrl) {
            this.name = show;
            this.url = imgUrl;
            this.id = 0;
        }

        setId(id) {
            this.id = id;
        }
    }

    ///////

    class Cast {
        constructor(name) {
            this.name = name
        }
    }

    class Season {
        constructor(startDate, endDate) {
            this.startDate = startDate,
                this.endDate = endDate
        }
    }

    function createShow(name, imageUrl, ID, seasons, casts, detalis) {
        return new Show(name, imageUrl, ID, seasons, casts, detalis)
    }

    function createTVShows(show, limitNumber) {
        return new TVShows(show, limitNumber)
    }

    function createCast(name) {
        return new Cast(name);
    }

    function createSeason(startDate, endDate) {
        return new Season(startDate, endDate);
    }

    function createFirstPageShow(name, imgUrl) {
        let show = new FirstPageShow(name, imgUrl);
        data.showList.push(show);
        const id = data.showList.length;
        show.setId(id);

        return show;
    }


    export {
        createShow,
        createTVShows,
        createCast,
        createSeason,
        createFirstPageShow
    }