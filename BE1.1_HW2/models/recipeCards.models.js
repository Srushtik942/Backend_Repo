const mongoose = require("mongoose");

const RecipeCardSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description : String,
    serving:{
        type: Number,
        required: true
    },
    preppingTime: {
        type: Number,
        required: true
    },
    cookingTime:{
        type: Number,
        required: true
    },
    ingredients:{
        type: String,
        required: true
    },
    directions:{
        type: String,
        required :true
    },
    notes: String
},
{
    timestamps : true
}
);

const RecipeCard = mongoose.model("RecipeCard",RecipeCardSchema);
module.exports = RecipeCard;