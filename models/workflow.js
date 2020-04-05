const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const WorkflowSchema = new Schema({
    checkbox: {
        type: Boolean
    },
    name: {
        type: String
    },
    descript: {
        type: String
    },
    updateTime: {
        type: Date
    }
})
module.exports = Workflow = mongoose.model("workflows", WorkflowSchema)