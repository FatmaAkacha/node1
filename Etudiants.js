const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './test.db'
});

const Etudiant = sequelize.define('Etudiant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
  tableName: "etudiants",
  timestamps: false
});

module.exports = Etudiant;
