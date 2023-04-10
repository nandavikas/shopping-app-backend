const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    }
},{
    timestamps: true
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory
