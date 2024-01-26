const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3001;
// Définition de l'en-tête pour permettre l'accès depuis n'importe où
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// Configuration de la connexion à la base de données
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});
// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database', err);
        return;
    }
    console.log('Connected to database');
});
// Récupération des données de la base de données
app.get('/etudiants', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (error, results) => {
        if (error) {
            console.error('Error fetching data', error);
        } else {
            res.json(results);
        }
    });
});
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});