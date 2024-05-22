const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { went, cat } = require("../../../controllers/categoryActions");

router.get("/", went);
router.get("/:id", cat);

/* ************************************************************************* */

module.exports = router;