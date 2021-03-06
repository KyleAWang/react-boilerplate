const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQL,
    GraphQLInputObjectType
}  = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'Shipping',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        no: {
            type: new GraphQLNonNull(GraphQLString)
        },
        url: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
    })
});
