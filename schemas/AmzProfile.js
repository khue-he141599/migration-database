const {Schema} = require('mongoose')

const AmzProfile = new Schema({
    template: {
        type: Schema.Types.Mixed
    },

    name: {
        type: String,
    },

    is_default: {
        type: Boolean,
        default: false
    },

    is_active: {
        type: Boolean,
        default: true,
        index: true
    },

    is_deprecated: {
        type: Boolean,
        default: false
    },

    items: {
        type: [Schema.Types.ObjectId],
        ref: 'AmzProfileItem',
        index: true
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

AmzProfile.index({name: 'text'})

module.exports = AmzProfile
