const Order = require('../models/Order');
const Inventory = require('../models/Inventory');

module.exports = {
    Query: {
        async getItems(_, {category, pageNumber}) {
            const itemsPerPage = 5
            const items = await Inventory.find({category})
                .skip(itemsPerPage * pageNumber)
                .limit(itemsPerPage)
            return items
        }
    },
    Mutation: {
        async createOrder(_, {orderInput: {userId, items, total}}) {
            const createOrder = new Order({
                userId,
                items,
                total,
            });

            const res = await createOrder.save();
            return {
                id: res.id,
            };
        }
    }
}
