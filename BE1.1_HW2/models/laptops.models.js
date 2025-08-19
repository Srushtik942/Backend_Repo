const mongoose = require("mongoose");

const LaptopSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    procesor:{
        type: String
    },
    ramSizeGB: {
        type: Number
    },
    storageSizeGB:{
        type: Number
    },
    screenSizeInches: {
        type:Number,
    },
    isTouchscreen :{
        type: Boolean,
        default: false
    },
    hasSSD : {
        type: Boolean,
        default: false
    },
    isSaleActive:{
        type: Boolean,
        default: false
    }
},
{
    timestamps : true
}
);

const Laptop = mongoose.model("Laptop",LaptopSchema);

module.exports = Laptop