const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const productMulter = require('../middleware/productMulter')

router.get("/crearProd", adminController.create);
//aca pongo el multer .single es por q subo un solo archivo y entre () va el name del input de la vista
router.post("/store",productMulter.single('image'), adminController.store);

router.get("/editarProd/:id", adminController.edit);
router.put("/editarProd/:id", productMulter.single('image'), adminController.update )


router.delete("/:id", adminController.destroy);


module.exports = router;