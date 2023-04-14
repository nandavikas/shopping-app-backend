const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const port = process.env.PORT || 8080;
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/shopping-app'

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen({ port });
    }
)

