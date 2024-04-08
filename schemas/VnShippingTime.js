const { Schema } = require('mongoose')

const SHIPPING_TYPES = ['normal', 'fast', 'xfast']
const VnShippingTimeValue = new Schema({
    shipping_type: {
        type: String,
        required: true,
        enum: SHIPPING_TYPES,
    },
    time_from: {
        type: Number,
        required: true,
        default: 0,
    },
    time_to: {
        type: Number,
        default: 0,
    },
})

const ModifyValue = new Schema({
    district: {
        type: String,
        required: true,
        trim: true,
    },
    value: {
        type: Number,
        default: 0,
    },
})

const VnShippingTime = new Schema({
    plan: {
        type: Schema.Types.ObjectId,
        ref: 'VnShippingPlan',
        required: true,
        index: true,
    },
    zone: {
        type: Schema.Types.ObjectId,
        ref: 'VnShippingZone',
        required: true,
        index: true,
    },
    estimation_values: {
        type: [VnShippingTimeValue],
        default: [],
    },
    modify_for_district: {
        type: Boolean,
        default: false,
    },
    modifies: {
        type: [ModifyValue],
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

module.exports = VnShippingTime
