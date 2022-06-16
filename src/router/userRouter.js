const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.register);
router.get("/", mainControllers.login);

module.exports = router;