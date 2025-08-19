const mongoose = require("mongoose");

const StayPropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    location:{
        type: String
    },
    pricePerNight: {
        type: Number
    },
    capacity:{
        type: Number
    },
    isPetFriendly: {
        type:Boolean,
        default: false
    },
    hasParking : {
        type:Boolean,
        deafault: false
    },
    hasWiFi :{
        type: Boolean,
        default: false
    },
    isActive : {
        type: Boolean,
        default: true
    },
},
{
    timestamps : true
}
);

const Property = mongoose.model("Property",StayPropertySchema);

module.exports = Property