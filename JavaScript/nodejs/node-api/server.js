const express = require("express");

const app = express();

app.get("/", (req, rep)=>{
    rep.send("Hello Iran");
});

app.listen("5000");