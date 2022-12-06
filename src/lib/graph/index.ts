import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';
import fs from 'fs';
import path from 'path';

let typeDefs = '';
const gqlFiles = fs.readdirSync(path.join(__dirname, './typedefs'));
gqlFiles.forEach((gqlFile) => {
    typeDefs += fs.readFileSync(path.join(__dirname, './typedefs', gqlFile), { encoding: 'utf8'});
});

let resolvers = {};
const resolverFiles = fs.readdirSync(path.join(__dirname, './resolvers'));
resolverFiles.forEach((resolverFile) => {
    resolvers = Object.assign(resolvers, require(path.join(__dirname, './resolvers', resolverFile)));
});
console.log(resolvers);

async function startServer(app: Express) {
  const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

export default startServer;
