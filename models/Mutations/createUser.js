const graphql = require('graphql');
const userData = require('../../Data/userData');
const UserType = require('../Typedefs/UserType');
const StatusType = require('../Typedefs/StatusType');
const {
    GraphQLString,
    GraphQLInt,
} = graphql;

const USER_ADD = {
    type: StatusType,
    args: {
        name : {type : GraphQLString},
        email : {type: GraphQLString},
        phone : {type: GraphQLInt}
    },
    resolve(parents, args) {
        createUser(args)
        return {
            success : true,
            message : "Created Successfully",
            error: ""
        }
    }
}

function createUser(args) {
    userData.push(args);
}

module.exports = USER_ADD;