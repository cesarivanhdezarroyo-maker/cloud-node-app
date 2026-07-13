const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hola desde Docker + GitHub Actions + AWS EC2</h1>");
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en el puerto 3000");
});