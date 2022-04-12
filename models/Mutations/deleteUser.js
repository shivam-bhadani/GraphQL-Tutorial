const graphql = require('graphql');
const userData = require('../../Data/userData');
const StatusType = require('../Typedefs/StatusType');
const {
    GraphQLString,
    GraphQLInt,
} = graphql;

const USER_DELETE = {
    type: StatusType,
    args: {
        id : {type: GraphQLInt},
    },
    resolve(parents, args) {
        deleteUser(args)
        return {
            success : true,
            message : "Deleted Successfully",
            error: "" 
        }
    }
}

function deleteUser(args) {
    let user = userData.find(user => user.id==args.id);
    const index = userData.indexOf(user);
    if(index>-1) {
        userData.splice(index, 1);
    }
}

module.exports = USER_DELETE;