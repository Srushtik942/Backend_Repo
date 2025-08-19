const mongoose = require("mongoose");

const productCard = new mongoose.Schema({
    imageUrl : String,
    name: String,
    ratingAndReviews: String,
    stars: Number,
    specialPrice: Number,
    originalPrice: Number,
    discount: Number,
    offers: [{
        type: String
    }],
    warrenty: String,
    model: String
},
{
    timeStamp: true
}
);

const Product = mongoose.model("Product",productCard);

module.exports = Product;
