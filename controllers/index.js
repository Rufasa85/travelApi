const express = require('express');
const router = express.Router();

const locationRoutes = require("./api/locationApiRoutes");
const travellerRoutes = require("./api/travellerApiRoutes");
const tripRoutes = require("./api/tripApiRoutes");

router.use("/api/locations",locationRoutes);
router.use("/api/travellers",travellerRoutes);
router.use("/api/trips",tripRoutes);

const locationFrontRoutes = require("./frontend/locationRoutes");
router.use("/locations",locationFrontRoutes);

module.exports = router;