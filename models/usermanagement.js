const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const UsermanagementSchema = new Schema({
    checkbox: {
        type: Boolean,
    },
    username: {
        type: String,
    },
    name: {
        type: String,
    },
    role: {
        type: String,
    },
    PDA: {
        type: Number,
    },
    status: {
        type: Boolean,
    }
})
module.exports = Usermanagement = mongoose.model("usermanagements", UsermanagementSchema)