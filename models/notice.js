const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const NoticeSchema = new Schema({
    title: {
        type: String,
    },
    publish: {
        type: String,
    },
    publishdate: {
        type: Date,
    },
    roll: {
        type: String,
    },
    checkbox: {
        type: Boolean,
    },
    desc: {
        type: String,
    }

})
module.exports = Notice = mongoose.model("notices", NoticeSchema)