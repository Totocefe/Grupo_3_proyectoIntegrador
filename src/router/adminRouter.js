const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const multer = require("multer");

router.get("/crearProd", mainControllers.create);


router.get("/editarProd/:id", mainControllers.edit);
router.put("/editarProd/:id",mainControllers.update )


router.get("/delete", mainControllers.delete);


module.exports = router;