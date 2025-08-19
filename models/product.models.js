const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    photoUrl: String,
    title:String,
    description: String,
    productInfo : String,
    color: {
        type: String,
        enum:["Blue","Red","Green","Black"]
    },
    size: {
        type:Number,
        enum: [7,8,9,10,11]
    },
    totalPrice:Number
},
{timestamps: true}
);

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product