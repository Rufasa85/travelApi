const express = require('express');
const router = express.Router();
const locationRoutes = require("./locationApiRoutes");
const travellerRoutes = require("./travellerApiRoutes");
const tripRoutes = require("./tripApiRoutes");

router.use("/api/locations",locationRoutes);
router.use("/api/travellers",travellerRoutes);
router.use("/api/trips",tripRoutes);

module.exports = router;