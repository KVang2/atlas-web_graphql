const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
    },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
    task: {
            type: TaskType,
            args: { 
                id: "1" { type: GraphQLString },
                id: "2" { type: GraphQLString },
            resolve(parent, args) {

            }
        }
    }
});

module.exports = { TaskType, schema };