const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("PRUEBA GEMMA 123");
});

app.listen(3000, () => {
    console.log("PRUEBA GEMMA 123");
});







