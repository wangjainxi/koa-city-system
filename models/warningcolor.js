const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const WarningcolorSchema = new Schema({
    checkbox: {
        type: Boolean
    },
    max: {
        type: Number
    },
    min: {
        type: Number
    },
    remark: {
        type: String
    },
    color: {
        type: Object,
        default:{
            name: String,
            color: String
        }
    },
    label: {
        type: String
    }
})
module.exports = Warningcolor = mongoose.model("warningcolorS", WarningcolorSchema)