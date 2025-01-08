const express = require("express");
const router = express.Router();
const siteContent = require("../data/siteContent");

// Ruta principal
router.get("/", (req, res) => {
    res.render("index", siteContent); 
});

module.exports = router;
