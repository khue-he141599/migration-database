const { Schema } = require('mongoose')

const VnShippingZone = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    provinces: {
        type: [String],
        default: [],
    },
    is_default: {
        type: Boolean,
        default: false,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    deleted_at: {
        type: Date,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updated: {
        type: Date,
    },
})

module.exports = VnShippingZone
