const express = require('express');
const mongodb = require('mongodb');
const Etudiant = require('./Etudiants');
const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connexion à la base de données MongoDB
const MongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'etudiantsDB';
let db;
MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connecté à MongoDB');
    db = client.db(dbName);
});
app.use(express.json());

app.get("/etudiants", (req, res) => {
    db.collection('etudiants').find().toArray((err, etudiants) => {
        if(err)
           { console.error(err);
            res.send('Error lors de la récupération des étudiants');
            return;}
        res.json(etudiants);
        })
});

//Démarrage du serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});