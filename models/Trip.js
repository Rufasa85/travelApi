const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    budget:{
        type:DataTypes.INTEGER,
    },
    people:{
        type:DataTypes.INTEGER,
        defaultValue:1
    }
},{
    sequelize
})

module.exports = Trip;