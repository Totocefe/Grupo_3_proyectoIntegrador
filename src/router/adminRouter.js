const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const productMulter = require('../middleware/productMulter')

router.get("/crearProd", mainControllers.create);
//aca pongo el multer .single es por q subo un solo archivo y entre () va el name del input de la vista
router.post("/",productMulter.single('image'), mainControllers.store);

router.get("/editarProd/:id", mainControllers.edit);
router.put("/editarProd/:id", productMulter.single('image'), mainControllers.update )


router.delete("/:id", mainControllers.destroy);


module.exports = router;