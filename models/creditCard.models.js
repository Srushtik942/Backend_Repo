const mongoose = require('mongoose');

const CreditCardSchema = new mongoose.Schema({
    bankName : String,
    cardNumber : Number,
    validUpto:Number,
    customerName: String,
    companyName: String
},
{
    timestamps: true
}
);

const CreditCard = mongoose.Model('CreditCard',CreditCardSchema);

module.exports = CreditCard;