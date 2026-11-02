const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.json({
        mensaje: "Login funcionando"
    });
});

module.exports = router;


