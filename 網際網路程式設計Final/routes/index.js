var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/Chart', function(req, res, next) {
    res.render('Chart');
})
router.get('/login', function(req, res, next) {
    res.render('login');
})
router.get('/signup', function(req, res, next) {
    res.render('signup');
})
router.get('/aboutUs', function(req, res, next) {
    res.render('aboutUs');
})

module.exports = router;