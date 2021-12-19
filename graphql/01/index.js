const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { users, events, locations, participants } = require("./data");

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    events: [Event!]
  }

  type Event {
    id: Int!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: Int!
    user_id: Int!
    user: User!
    location: Location!
    participants: [Participant!]
  }

  type Location {
    id: Int!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  type Participant {
    id: Int!
    user_id: Int!
    username: String!
    event_id: Int!
  }

  type Query {
    users: [User!]
    user(id: Int!): User!
    events: [Event!]
    event(id: Int!): Event!
    locations: [Location!]
    location(id: Int!): Location!
    participants: [Participant!]
    participant(id: Int!): Participant!
  }
`;
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find((user) => user.id === args.id),
    events: () => events,
    event: (parent, args) => events.find((event) => event.id === args.id),
    locations: () => locations,
    location: (parent, args) =>
      locations.find((location) => location.id === args.id),
    participants: () => participants,
    participant: (parent, args) =>
      participants.find((participant) => participant.id === args.id),
  },
  User: {
    events: (parent) => {
      return events.filter((event) => event.user_id === parent.id);
    },
  },
  Event: {
    user: (parent) => {
      return users.find((user) => user.id === parent.user_id);
    },
    location: (parent) => {
      return locations.find((location) => location.id === parent.location_id);
    },
    participants: (parent) => {
      return participants.filter(
        (participant) => participant.event_id === parent.id
      );
    },
  },
  Participant: {
    username: (parent) => {
      const { username } = users.find((user) => user.id === parent.user_id);
      return username;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

server
  .listen()
  .then(({ url }) => console.log(`Apollo server is started at ${url}`));
