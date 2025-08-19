const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    age:{
        type: Number
    },
    gender: {
        type:String
    },
    country :{
        type: String
    },
    isActive : {
        type: Boolean,
        default: true
    },
    gamesPlayed: {
        type: Number
    },
    level: {
        type: String
    },
    preferredGame:{
        type: String
    }
},
{
    timestamps : true
}
);

const Player = mongoose.model("Player",PlayerSchema);

module.exports = Player