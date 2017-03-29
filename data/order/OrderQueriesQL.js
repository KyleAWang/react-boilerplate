const {
    GraphQLList
}  = require('graphql')

const OrderType = require('./typeQL/OrderTypeQL');
const OrderDB = require('./OrderDB');

module.exports = {
    orders: {
        type: new GraphQLList(OrderType),
        resolve: OrderDB.getOrders,
    },
    viewer: {
        type: new GraphQLList(OrderType),
        resolve: OrderDB.getViewer,
    }
}
