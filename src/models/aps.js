let fs = require('fs');

function aps() {}

aps.prototype.getAps = function(callback) {

  fs.readFile('./data/data.json', 'utf8', function(err, result) {

    let data = [];

    if (!err) {

      let obj = JSON.parse(result);
      let i;

      if (obj.materias.length > 4) {

        i = 4;

      } else {

        i = (obj.materias.length - 1);

      }
    
      obj.materias.forEach(function(materia) {

        if (i >=  0) {

          data[i] = materia;
	      i--;

        }

      });

    }

    callback(err, data);

  });

};

module.exports = function() {

  return aps;

};

