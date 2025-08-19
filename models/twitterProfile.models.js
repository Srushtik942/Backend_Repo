const mongoose = require('mongoose');

const TwitterSchema =  new mongoose.Schema({
    profilePic : String,
    name: String,
    username: String,
    bio : String,
    followers: Number,
    following: Number,
    comanyName: String,
    city: String,
    portfolio: String,
    twitterHanle: String,
    isOnline : Boolean,
})

const Twitter = mongoose.model("Twitter",TwitterSchema);

module.exports = Twitter;