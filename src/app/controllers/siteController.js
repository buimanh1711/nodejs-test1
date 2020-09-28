class SiteController {

    home(req, res) {
        res.render('home');
    }

    search(req, res) {
        console.log(req.nav_search);
        res.render('search');
    }
}

module.exports = new SiteController;