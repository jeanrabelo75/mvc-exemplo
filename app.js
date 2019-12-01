let express = require('express');
let consign = require('consign');
let path = require('path');

let app = express();
const hostname = 'localhost';
const port = '3000';

app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './src/views');

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.listen(3000, function() {

  console.log(`Server running at http://${hostname}:${port}/`);

});

