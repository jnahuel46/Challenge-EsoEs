const { Sequelize, DataTypes, Model, DATE } = require('sequelize');
const sequelize = require('../database/db');

class proyectos_usuarios extends Model { }

proyectos_usuarios.init({
    // Model attributes are defined here
    proyectoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
       
    },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
     
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'proyectos_usuarios',
    timestamps: true // We need to choose the model name
});


module.exports = proyectos_usuarios;

