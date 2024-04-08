const {Schema} = require('mongoose')

module.exports = new Schema({
    email: {
        type: String
    },

    full_name: {
        type: String,
    },

    address: {
        type: String,
    },

    address2: {
        type: String,
    },

    country_code: {
        type: String
    },

    country: {
        type: String,
    },

    city: {
        type: String,
    },

    latitude: {
        type: Number
    },

    longtitude: {
        type: Number
    },

    ward: {
        type: String
    },

    district: {
        type: String
    },

    province: {
        type: String
    },

    phone: {
        type: String,
    },

    state: {
        type: String,
    },

    region_code: {
        type: String
    },

    postal_code: {
        type: String,
    },

    is_validated: {
        type: Boolean,
        default: false
    }
})
