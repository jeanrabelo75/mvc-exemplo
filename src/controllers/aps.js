module.exports.index = function(application, req, res) {

  let apsModel = new application.src.models.aps();

  apsModel.getAps(function(err, result) {

    res.render("aps/index", {aps : result});

  });

};

