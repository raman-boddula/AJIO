const express = require("express");

const product = require("../models/product.model")

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("/",async(req,res)=>{
        try {
            // console.log("req.body",req.body)
            const cart = await Cart.create(req.body);
            return res.status(201).json({ cart });
        }
        catch (e) {
            return res.status(500).json({ status: "failed", message: e.message });
        }
    }
)

router.get("/", async (req, res) => {
    try {
        const cart = await Cart.find().populate("product").lean().exec();
        
        return res.status(201).json({cart})
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {new:1}).lean().exec();
        return res.status(201).json({cart})
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).json({cart})
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;