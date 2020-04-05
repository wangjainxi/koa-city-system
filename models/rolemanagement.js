const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const RolemanagementSchema = new Schema({
    checkbox: {
        type: Boolean,
    },
    code: {
        type: String,
    },
    name: {
        type: String,
    },
})
module.exports = Rolemanagement = mongoose.model("rolemanagements", RolemanagementSchema)