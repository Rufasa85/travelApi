const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init({
    name:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    }
},{
    sequelize
})

module.exports = Traveller;