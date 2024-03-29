const express = require("express");
const router = express.Router();
const apiProductController = require("../../controllers/api/apiProductController");

router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detail);

module.exports = router;