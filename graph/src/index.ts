import typeResolvers from "./resolvers/index" // eslint-disable-line
import typeDefinitions from "./schema/index" // eslint-disable-line

const { ApolloServer } = require("apollo-server")

const { PORT = 3001 } = process.env

const server = new ApolloServer({
  context: ({ req }: any) => {
    return {
      jwtToken: req.headers.authorization
    }
  },
  resolvers: typeResolvers,
  typeDefs: typeDefinitions
})

server.listen({ port: PORT }).then(({ url }: any) => {
  return console.log(`🚀 Server ready at ${url}`) // eslint-disable-line no-console
})
