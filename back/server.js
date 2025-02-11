const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, "../front")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../front/index.html"));
});

// Exporter l'application pour Vercel
module.exports = app;
