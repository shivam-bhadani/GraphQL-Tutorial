const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name : 'user',
    fields : () => ({
        id : {type: GraphQLInt},
        name : {type: GraphQLString},
        email : {type: GraphQLString},
        phone : {type: GraphQLInt}
    })
})

module.exports = UserType;