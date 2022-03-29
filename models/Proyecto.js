const { Sequelize, DataTypes, Model, DATE } = require('sequelize');
const sequelize = require('../database/db');
const User = require('./User');

class Proyecto extends Model { }

Proyecto.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'proyecto',
    timestamps: true // We need to choose the model name
});


Proyecto.belongsToMany(User, { through: "proyectos_usuarios" });
User.belongsToMany(Proyecto, { through: "proyectos_usuarios" });
module.exports = Proyecto;

