const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/crearProd", mainControllers.create);
router.get("/editarProd", mainControllers.edit);
router.get("/delete", mainControllers.delete);

module.exports = router;