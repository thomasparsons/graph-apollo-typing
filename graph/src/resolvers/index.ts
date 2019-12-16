const resolvers = {
  Query: {
    getDogs: () => {
      return {
        dogs: [{
          dogInfo: {
            age: 5,
            name: "Rover"
          }
        }, {
          dogInfo: {
            age: 1,
            name: "Jack"
          }
        }, {
          dogInfo: {
            age: 4,
            name: "Max"
          }
        }, {
          dogInfo: {
            age: 12,
            name: "Rex"
          }
        }]
      }
    }
  }
}

export default resolvers
