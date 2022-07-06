const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const upload = require('../middleware/multer')

router.get("/crearProd", mainControllers.create);
router.post("/",upload.single('image'), mainControllers.store);

router.get("/editarProd/:id", mainControllers.edit);
router.put("/editarProd/:id", upload.single('image'), mainControllers.update )


router.delete("/:id", mainControllers.destroy);


module.exports = router;