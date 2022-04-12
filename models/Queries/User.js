const graphql = require('graphql');
const userData = require('../../Data/userData');
const UserType = require('../Typedefs/UserType');
const {
    GraphQLList
} = graphql;

const USER_LIST = {
    type: new GraphQLList(UserType),
    resolve(parents, args) {
        let data = userData
        return data
    }
}

module.exports = USER_LIST;