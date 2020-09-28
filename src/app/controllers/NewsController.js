class NewController {

    //[GET] /news
     index(req, res) {
        res.render('news');
     }

     //[GET] /news:slugs
     showDetail(req, res) {
        res.send('a detail page');
     }
}

module.exports = new NewController;