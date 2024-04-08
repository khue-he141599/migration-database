const {Schema} = require('mongoose')

const AmzFeed = new Schema({
    template: {
        type: Schema.Types.Mixed
    },

    name: {
        type: String,
    },

    email_to: {
        type: String
    },

    email_at: {
        type: Date
    },

    file_path: {
        type: String
    },

    total_product: {
        type: Number
    },

    created: {
        type: Date,
        required: true,
        default: Date.now
    },

    updated: {
        type: Date,
    },

    is_deleted: {
        type: Boolean,
        default: false,
        index: true,
    },

    deleted_at: {
        type: Date,
    },
})

AmzFeed.index({name: 'text'})

module.exports = AmzFeed
