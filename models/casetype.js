const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化数据模板
const CasetypeSchema = new Schema({
    label: {
        type: String,
        required: true
    },
})
module.exports = Casetype = mongoose.model("casetypes", CasetypeSchema)