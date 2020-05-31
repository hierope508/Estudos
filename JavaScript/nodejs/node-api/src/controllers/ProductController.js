const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res){
        const procuts = await Product.find();
        return res.json(procuts);
    }
};