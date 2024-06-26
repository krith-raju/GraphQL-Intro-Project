const {ApolloServer} = require("apollo-server");
const{typeDefs} = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: 4000}).then(({url}) => {
    console.log(`YOUR API IS RUNNING AT: ${url}:)`);
});
