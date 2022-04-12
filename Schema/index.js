const graphql = require('graphql');
const {
    GraphQLObjectType, 
    GraphQLSchema,
} = graphql;

const USER_LIST = require('../models/Queries/User');
const USER_ADD = require('../models/Mutations/createUser');
const USER_DETAIL = require('../models/Queries/UserDetail');
const USER_UPDATE = require('../models/Mutations/updateUser');
const USER_DELETE = require('../models/Mutations/deleteUser');

const RootQuery = new GraphQLObjectType({
    name : 'RootQuery',
    fields : {
        userList: USER_LIST,
        userDetail: USER_DETAIL
    }
});

const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields : {
        createUser: USER_ADD,
        updateUser: USER_UPDATE,
        deleteUser: USER_DELETE
    }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });