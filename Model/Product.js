const moongoose = require('mongoose');

const ProductSchema = new moongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});
module.exports = moongoose.model("products",ProductSchema);