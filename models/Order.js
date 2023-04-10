const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    items: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true
    }
})

module.exports = model('Order', orderSchema);
