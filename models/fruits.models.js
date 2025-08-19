const mongoose = require('mongoose');

const FruitsInfoSchema = new mongoose.Schema({
    imageUrl : String,
    fruitName: String,
    shortDescription : String,
    calories: Number,
    carbs: String,
    protien: String,
    fats : String
},
{
    timestamps: true
}
);

const Fruits = mongoose.model("Fruits",FruitsInfoSchema);

module.exports = Fruits