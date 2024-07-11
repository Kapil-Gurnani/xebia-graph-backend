import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import resolvers from './resolvers';
import Api from './datasources/Api';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    api: new Api(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
