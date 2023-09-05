class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    };

    //[GET] /news/:slag
    show(req, res) {
        res.send('show')
    };
}

module.exports = new NewsController();