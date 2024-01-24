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
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
];
app.get('/users', (req, res) => {
    res.json(users);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});