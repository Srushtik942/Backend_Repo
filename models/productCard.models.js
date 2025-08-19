const mongoose = require('mongoose');

const productCardSchema = new mongoose.Schema({
    imageUrl:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    ratingsAndReviews:{
        type: String,
        required: true
    },
    description :{
        type: String,
        required : true
    },
    price : {
        type: String,
        required : true
    },
    star :{
        type: Number,
        required: true
    }
}, { timestamps : true}
);

const Product = mongoose.model("Product", productCardSchema);

module.exports = Product