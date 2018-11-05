var express = require('express');
var router = express.Router();

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

module.exports = router;
