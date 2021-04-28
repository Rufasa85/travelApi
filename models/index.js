const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.hasMany(Trip);
Location.hasMany(Trip);

Trip.belongsTo(Traveller);
Trip.belongsTo(Location);

module.exports = {
    Location,
    Traveller,
    Trip
}