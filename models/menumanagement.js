const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const MenumanagementSchema = new Schema({
    checkbox: {
        type: Boolean
    },
    id: {
        type: String
    },
    name: {
        type: String
    },
    father: {
        type: String
    },
    menulink: {
        type: String
    },
    imglink: {
        type: String
    }
})
module.exports = Menumanagement = mongoose.model("menumanagements", MenumanagementSchema)