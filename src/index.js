var express = require('express');

var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'jade');

//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


var voitures = [{
  modele: "Clio",
  marque: "Renault",
  couleur: "rouge"
}, {
  modele: "307",
  marque: "Peugeot",
  couleur: "bleue"
}, {
  modele: "Corsa",
  marque: "Opel",
  couleur: "verte"
}]


app.get('/', function(req, res) {
  res.render('jade', {
    title: 'Hey',
    messageH1: 'Nouvelle voiture'
  });
});

app.get('/voitures', function(req, res) {
  res.send(voitures);
})

app.get('/voitures/:id', function(req, res) {
  res.send(voitures[req.params.id - 1]);
})

app.get('/newCar', function(req, res) {
  voitures.push({
    modele: req.query.modele,
    marque: req.query.marque,
    couleur: req.query.couleur
  });
  res.send(voitures);
})

app.post('/newCar', function(req, res) {
  voitures.push({
    modele: req.body.modele,
    marque: req.body.marque,
    couleur: req.body.couleur
  });
  res.send(voitures);
})

// port d'écoute
app.listen(1337);

console.log("Server is running ....")
