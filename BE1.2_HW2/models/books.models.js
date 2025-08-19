const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publishedYear:{
        type:Number,
        required: true
    },
    language:{
        type:String
    },
    genre:[{
        type: String,
        enum:['Fiction', 'Non-Fiction', 'Mystery', 'Thriller', 'Science Fiction', 'Fantasy', 'Romance', 'Historical', 'Biography', 'Self-help', 'Other']
    }],
    country:{
        type: String,
        default: 0
    },
    rating:{
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    summary: {
        type: String,
    },
    coverImageUrl:{
        type: String
    }
},
{
    timestamps: true
}
);

const Book = mongoose.model("Book",BookSchema);

module.exports = Book