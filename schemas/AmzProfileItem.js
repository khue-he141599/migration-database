const {Schema} = require('mongoose')

const AmzProfileItem = new Schema({
    profile_id: {
        type: Schema.Types.ObjectId,
        index: true,
    },

    label: {
        type: String,
    },

    field_name: {
        type: String,
    },

    type: {
        type: Number,
    },

    tooltips: {
        type: String
    },

    options: {
        type: [String],
    },

    can_edit: {
        type: Boolean,
        default: false
    },

    value: {
        type: String,
    },

    order: {
        type: Number
    },

    rules: {
        type: [String]
    },
})

module.exports = AmzProfileItem
