var express = require('express');
var router = express.Router();

var options = {
  // Initialization Options
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://colemankelleghan@localhost:5432/noekko';
var db = pgp(connectionString);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/data', function(req, res, next){

  db.any('select * from articles')
  .then(function (data) {
    console.log("DATA", data);
    res.send(data);
  })
  .catch(function (err) {
    return next(err);
  });

});


// router.get('/data', function(req, res, next) {
//
//
//
//   res.send(
//
//     [
//       {
//         article_id: 123,
//         title: 'The Title 1',
//         description: 'This is the description',
//         author: 'The Author',
//         url: 'https://google.com',
//         image: 'http://placehold.it/350x150',
//         published: '2017-02-08 02:40:12',
//         source: 'the-huffington-post',
//         x_score: 25
//       },
//       {
//         article_id: 111,
//         title: 'The Title 2',
//         description: 'This is the description',
//         author: 'The Author',
//         url: 'https://google.com',
//         image: 'http://placehold.it/350x150',
//         published: '2017-02-08 02:40:12',
//         source: 'the-huffington-post',
//         x_score: 75
//       },
//       {
//         article_id: 222,
//         title: 'The Title 3',
//         description: 'This is the description',
//         author: 'The Author',
//         url: 'https://google.com',
//         image: 'http://placehold.it/350x150',
//         published: '2017-02-08 02:40:12',
//         source: 'the-huffington-post',
//         x_score: 50
//       }
//     ]
//
//   );
//
//
//
// });

module.exports = router;
