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
const etudiants = [
    { id: 1, nom: 'John Doe' },
    { id: 2, nom: 'Jane Smith' },
    { id: 3, nom: 'Bob Johnson' }
];
app.get('/etudiants', (req, res) => {
    res.json(etudiants);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});