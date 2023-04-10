const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen({ port: 8080 });
    }
)

