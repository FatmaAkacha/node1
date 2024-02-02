const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Etudiants = require('./Etudiants')

// Synchronisation avec la base de données
sequelize.sync().then(() => {
  console.log('La synchronisation avec la base de données est faite !');
}).catch((err) => {
  console.error('Erreur lors de la synchronisation avec la base de données :', err);
});

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/etudiants', (req, res) => {
  Etudiant.findAll({
      order: [
          ['id', 'ASC']
      ]
  }).then((etudiants) => {
      res.json(etudiants);
  });
});


app.get('/etudiants/:id', (req, res) => {
  const etudiantId = req.params.id;
  Etudiant.findByPk(etudiantId).then((etudiant) => {
    res.json(etudiant);
  });
});

app.post('/etudiants', (req, res) => {
  const { lastname, firstname, ville } = req.body; 
  Etudiant.create({ lastname, firstname, ville }).then((etudiant) => {
    res.json(etudiant);
  });
});

app.put('/etudiants/:id', (req, res) => {
  const etudiantId = req.params.id;
  const { lastname, firstname, ville } = req.body;
  Etudiant.update({ lastname, firstname, ville }, { where: { id: etudiantId } }).then(() => {
    res.json({ message: 'Étudiant mis à jour avec succès' });
  });
});

app.delete('/etudiants/:id', (req, res) => {
  const etudiantId = req.params.id;
  Etudiant.destroy({ where: { id: etudiantId } }).then(() => {
    res.json({ message: 'Étudiant supprimé avec succès' });
  });
});

app.get('/rechercheA/:nom/:ville', (req, res) => {
  const nom = req.params.firstname;
  const ville = req.params.ville;

  Etudiant.findAll({
      where: {
          firstname: {
              [sequelize.Op.like]: `%${nom}%`
          },
          ville: {
              [sequelize.Op.like]: `%${ville}%`
          }
      }
  }).then((etudiants) => {
      res.json(etudiants);
  });
});


// Configuration du port
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });