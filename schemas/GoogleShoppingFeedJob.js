const {Schema} = require('mongoose')

const GoogleShoppingFeedJob = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        index: true,
    },

    filter: {
        type: Schema.Types.Mixed,
        default: {}
    },

    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'processing', 'cancelled', 'done', 'failed'],
        trim: true,
        index: true,
    },

    download_link: {
        type: String,
        trim: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    cancelled_at: {
        type: Date,
    },

    is_deleted: {
        type: Boolean,
        default: false,
        index: true,
    },

    error_message: {
        type: String,
    },

    deleted_at: {
        type: Date,
    },
})

module.exports = GoogleShoppingFeedJob