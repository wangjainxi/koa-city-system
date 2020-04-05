const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const QuestionSchema = new Schema({
    checkbox: {
        type: Boolean
    },
    name: {
        type: String
    },
})
module.exports = Question = mongoose.model("questions", QuestionSchema)