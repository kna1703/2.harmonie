const express = require("express");

const router = express.Router();

/* ************************************************************************* */
const { browse, read } = require("../../../controllers/programActions");

router.get("/", browse);
router.get("/:id", read);
// Import And Use Routers Here
/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;