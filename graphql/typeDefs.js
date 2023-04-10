const {gql} = require('apollo-server');

module.exports = gql`

    type Id {
        id: String!
    }
    
    type Inventory {
        item: String
        category: String
        stock: Int
        price: Float
        description: String
        image: String
    }
    
    input ItemToOrderInput {
        name: String,
        quantity: Int
    }
    
    input OrderInput {
        userId: String
        items: [ItemToOrderInput]
        total: Float
    }
    
    type Query {
        getItems(category: String, pageNumber: Int): [Inventory]
    }
    
    type Mutation {
        createOrder(orderInput: OrderInput): Id!
    }
`;
