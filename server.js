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
const classes = [
    { id:'ginf21', labelle: "Génie Informatique 21 cours de jour" },
    { id:'ginf22', labelle: "Génie Informatique 22 cours de soir" },
    { id:'ginf32', labelle: "Génie Informatique 32 cours de soir" }
];
app.get('/classes', (req, res) => {
    res.json(classes);
});
app.get('/etudiants/:id', (req, res) => {
    const etudiantId = parseInt(req.params.id);
    const selectedEtudiant = etudiants.find(etudiant => etudiant.id === etudiantId);
        res.json(selectedEtudiant);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});