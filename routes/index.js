var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Design Company in Vellore | Software Company in Vellore' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'RamSoft | Software Company in Vellore' }, {page_name:'about'});
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services - RamSoft | Software Company in Vellore' });
});
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Profile - RamSoft | Software Company in Vellore' });
});
router.get('/blog', function(req, res, next) {
  res.render('cmg', { title: 'Comming Soon - RamSoft | Software Company in Vellore' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - RamSoft | Software Company in Vellore' });
});


module.exports = router;
