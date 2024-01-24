const express = require('express');
const app = express();
const port = 3001;
// Définition de l'en-tête pour permettre l'accès depuis n'importe où
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
const classes = [
    { id: 1, nom: 'ginf21', labelle: "Génie Informatique 21 cours de jour" },
    { id: 2, nom: 'ginf22', labelle: "Génie Informatique 22 cours de soir" },
    { id: 3, nom: 'ginf32', labelle: "Génie Informatique 32 cours de soir" }
];
app.get('/classes', (req, res) => {
    res.json(classes);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});