const {Schema} = require('mongoose')

module.exports = new Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        default: 0
    },

    paid: {
        type: Number,
        default: 0
    },

    currency: {
        type: String,
        default: 'USD'
    },

    status: {
        type: String,
        enum: ['pending', 'processing', 'paid', 'refunded'],
        default: 'pending'
    },

    caused_by: {
        type: String,
        enum: ['fulfillment', 'transaction', 'subscription']
    },

    paid_at: {
        type: Date,
        index: true
    },

    updated: {
        type: Date,
    },

    created: {
        type: Date,
        default: Date.now
    }
})