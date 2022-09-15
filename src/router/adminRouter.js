const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const editCreateProductValidation = require("../middleware/editCreateProductValidation");
const productMulter = require('../middleware/productMulter');
const productValidation = require("../middleware/editCreateProductValidation");

router.get("/crearProd", adminController.create);
//aca pongo el multer .single es por q subo un solo archivo y entre () va el name del input de la vista
router.post("/store",productMulter.single('image'),editCreateProductValidation, adminController.store);

router.get("/editarProd/:id", adminController.edit);
router.put("/editarProd/:id", productMulter.single('image'),editCreateProductValidation, adminController.update )


router.delete("/:id", adminController.destroy);


module.exports = router;