const mongoose = require("mongoose");

// const User = require("./user.model");

const product = require("./product.model");

const cartSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref:product,required: true }
}
, {
    versionKey: false,
    timestamps:true
})
module.exports = new mongoose.model("cartPage", cartSchema);