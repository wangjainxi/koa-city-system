const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const PeoplemanagementSchema = new Schema({
    checkbox: {
        type: Boolean,
    },
    sex: {
        type: String,
    },
    name: {
        type: String,
    },
    tel: {
        type: Number,
    },
    belongIns: {
        type: String,
    }
})
module.exports = Peoplemanagement = mongoose.model("peoplemanagements", PeoplemanagementSchema)