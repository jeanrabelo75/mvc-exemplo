module.exports = function(application) {

  application.get('/', function(req, res) {

    application.src.controllers.aps.index(application, req, res);

  });

};

