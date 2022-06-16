const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/productDetail", mainControllers.productDetail);
router.get("/productCart", mainControllers.productCart);

module.exports = router;