const express = require("express");

const router = express.Router();

const { went, cat } = require("../../../controllers/categoryActions");

router.get("/", went);
router.get("/:id", cat);

module.exports = router;