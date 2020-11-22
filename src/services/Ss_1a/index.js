const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const typeDefs =require('./typeDefs');
const resolvers = require('./resolvers') ;

const server = new ApolloServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
});

server.listen({ port: 2008 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});