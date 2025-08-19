const mongoose = require('mongoose');

const TwitterSchema =  new mongoose.Schema({
    profilePicUrl : String,
    fullName: String,
    username: String,
    bio : String,
    followerCount: Number,
    followingCount: Number,
    comanyName: String,
    location: String,
    portfolioUrl: String,
    twitterHanle: String,
    isOnline : Boolean,
})

const Twitter = mongoose.model("Twitter",TwitterSchema);

module.exports = Twitter;