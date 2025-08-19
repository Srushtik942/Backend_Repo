const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    designation: String,
    idNo: Number,
    dob: Number,
    mail: String,
    telNo: Number,
    address: String
});

const Employee = mongoose.model('Employee',EmployeeSchema);

module.exports = Employee;