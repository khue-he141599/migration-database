const { Schema } = require('mongoose')

const VnShippingPlan = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    carrier_code: {
        type: String,
        trim: true,
        required: true,
        index: true,
    },
    for_all_product: {
        type: Boolean,
        default: false
    },
    skus: {
        type: [String],
        default: [],
    },
    active: {
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

module.exports = VnShippingPlan
