var express = require('express');
var router = express.Router();
var controller = require('../controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/faqs', function(req, res, next) {
  res.render('faqs', {});
});

router.get('/news-test', function(req, res, next) {
  res.render('news-widget', {});
});

router.get('/posters-test', function(req, res, next) {
  res.render('posters', {posters: [{ lang: 'English', link: 'http://plateletdonors.org/bcp/download.php?download_file=Poster PD English.pdf&type=p' }]});
});


router.get('/country', function(req, res, next) {
  controller.getCountryForCode('IND',function(countries){
    console.log(countries);
    res.send(countries);
  })
});

/* POST request for creating api log */
router.post('/api',function(req,res,next){
   controller.createApiLog(req,res);
});

module.exports = router;
