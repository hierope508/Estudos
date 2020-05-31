const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Incia app
const app = express();

//Iniciando db
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    {useNewUrlParser: true}
);
requireDir("./src/model");

//Rotas
app.use("/api", require("./src/routes"));

app.listen("5000");