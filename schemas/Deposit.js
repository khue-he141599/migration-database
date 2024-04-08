const {Schema} = require('mongoose')

const user = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    IP: {
        type: String
    }
})

module.exports = new Schema({
    amount: {
        type: Number,
        required: true
    },

    transaction_id: {
        type: String
    },

    requested_by: {
        type: user
    },

    approved_by: {
        type: user
    },

    rejected_by: {
        type: user
    },

    note: {
        type: String,
        default: ''
    },

    status: {
        type: String,
        enum: ['pending', 'cancelled', 'rejected', 'approved'],
        default: 'pending'
    },

    confirmed_at: {
        type: Date,
    },

    created: {
        type: Date,
        default: Date.now
    },

    gateway: {
        type: String,
        default: 'payoneer'
    },

    sync_to_manager: {
        type: String,
        default: 'not_synced',
        index: true
    },
})

