const mongoose = require("mongoose");

const FaceBookPostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Time,
        required : true
    },
    caption: {
        type: String
    },
    imageUrl: {
        type: String
    },
    likes: Number,
    comments: Number,
    shares: Number
},
{
    timestamps: true
}
);

const FacebookPost = mongoose.model("FacebookPost",FaceBookPostSchema);

module.exports = FacebookPost