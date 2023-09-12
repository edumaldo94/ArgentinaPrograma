const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./baseDeDatos.js');

const baseforoAe = sequelize.define('baseforoAe', {

    titulo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    comentario: {
      type: DataTypes.STRING(500),
      allowNull: false
    
    },
    imagen: {
        type: DataTypes.STRING(255),
     
       allowNull: false
  
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
  }
      
  }, {
    timestamps:false,
    tableName:'contenido',
  });
  module.exports = baseforoAe;