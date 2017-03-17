





module.exports = {
  getData: getData,
};



function getData(req, res, next) {
  db.any('select * from articles')
  .then(function (data) {
    console.log("DATA", data);
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved articles'
    });
  })
  .catch(function (err) {
    return next(err);
  });
}
