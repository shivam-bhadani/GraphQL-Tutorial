const graphql = require('graphql');
const userData = require('../../Data/userData');
const UserType = require('../Typedefs/UserType');
const {
    GraphQLList,
    GraphQLInt
} = graphql;

const USER_DETAIL = {
    type: new GraphQLList(UserType),
    args : {
        id : {type: GraphQLInt}
    },
    resolve(parents, args) {
        let user = userData.find(user => user.id==args.id)
        const data = new Array(user);
        return data
    }
}

module.exports = USER_DETAIL;