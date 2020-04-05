const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const InsManagementSchema = new Schema({
    code: {
        type: Boolean,
    },
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    higthlevel: {
        type: String,
    },
    tel: {
        type: String,
    },

})
module.exports = InsManagement = mongoose.model("insManagements", InsManagementSchema)