const graphql = require('graphql');
const userData = require('../../Data/userData');
const StatusType = require('../Typedefs/StatusType');
const {
    GraphQLString,
    GraphQLInt,
} = graphql;

const USER_UPDATE = {
    type: StatusType,
    args: {
        id : {type: GraphQLInt},
        name : {type : GraphQLString},
        email : {type: GraphQLString},
        phone : {type: GraphQLInt}
    },
    resolve(parents, args) {
        updateUser(args)
        return {
            success : true,
            message : "Updated Successfully",
            error: "" 
        }
    }
}

function updateUser(args) {
    let user = userData.find(user => user.id==args.id);
    user.name = args.name,
    user.email = args.email,
    user.phone = args.phone
}

module.exports = USER_UPDATE;