const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const diceRoutes = require("./diceRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dice", diceRoutes);

module.exports = router;
