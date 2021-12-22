const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { nanoid } = require("nanoid");
const { users, events, locations, participants } = require("./data");

const typeDefs = gql`
  # User
  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event!]
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    email: String
  }

  type DeleteAllOutput {
    count: Int!
  }

  # Event
  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
    user: User!
    location: Location!
    participants: [Participant!]
  }

  input CreateEventInput {
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
  }
  input UpdateEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: ID
    user_id: ID
  }
  # Location
  type Location {
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  input CreateLocationInput {
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }
  input UpdateLocationInput {
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  # Participant
  type Participant {
    id: ID!
    user_id: ID!
    username: String!
    event_id: ID!
  }

  input CreateParticipantInput {
    user_id: ID!
    username: String!
    event_id: ID!
  }
  input UpdateParticipantInput {
    user_id: ID
    username: String
    event_id: ID
  }

  type Query {
    users: [User!]
    user(id: ID!): User!
    events: [Event!]
    event(id: ID!): Event!
    locations: [Location!]
    location(id: ID!): Location!
    participants: [Participant!]
    participant(id: ID!): Participant!
  }

  type Mutation {
    # User
    addUser(data: CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!
    # Event
    addEvent(data: CreateEventInput!): Event!
    updateEvent(id: ID!, data: UpdateEventInput!): Event!
    deleteEvent(id: ID!): Event!
    deleteAllEvents: DeleteAllOutput!
    # Location
    addLocation(data: CreateLocationInput!): Location!
    updateLocation(id: ID!, data: UpdateLocationInput!): Location!
    deleteLocation(id: ID!): Location!
    deleteAllLocations: DeleteAllOutput!
    # Participant
    addParticipant(data: CreateParticipantInput!): Participant!
    updateParticipant(id: ID!, data: UpdateParticipantInput!): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteAllParticipants: DeleteAllOutput!
  }
`;
const resolvers = {
  Mutation: {
    // User
    addUser: (parent, { data }) => {
      const user = { id: nanoid(), ...data };
      users.unshift(user);
      return user;
    },
    updateUser: (parent, { id, data }) => {
      const user_index = users.findIndex((user) => user.id === id);
      if (user_index === -1) throw new Error("User Not Found");
      users[user_index] = {
        ...users[user_index],
        ...data,
      };
      return users[user_index];
    },
    deleteUser: (parent, { id }) => {
      const user_index = users.findIndex((user) => user.id === id);
      if (user_index === -1) throw new Error("User Not Found");
      const deletedUser = users[user_index];
      users.splice(user_index, 1);
      return deletedUser;
    },
    deleteAllUsers: () => {
      const length = users.length;
      users.splice(0, length);
      return { count: length };
    },
    // Event
    addEvent: (parent, { data }) => {
      const event = { id: nanoid(), ...data };
      events.unshift(event);
      return event;
    },
    updateEvent: (parent, { id, data }) => {
      const event_index = events.findIndex((event) => event.id === id);
      if (event_index === -1) throw new Error("Event Not Found");
      events[event_index] = {
        ...events[event_index],
        ...data,
      };
      return events[event_index];
    },
    deleteEvent: (parent, { id }) => {
      const event_index = events.findIndex((event) => event.id === id);
      if (event_index === -1) throw new Error("Event Not Found");
      const deletedEvent = events[event_index];
      users.splice(event_index, 1);
      return deletedEvent;
    },
    deleteAllEvents: () => {
      const length = events.length;
      events.splice(0, length);
      return { count: length };
    },
    // Location
    addLocation: (parent, { data }) => {
      const location = { id: nanoid(), ...data };
      locations.unshift(location);
      return location;
    },
    updateLocation: (parent, { id, data }) => {
      const location_index = locations.findIndex(
        (location) => location.id === id
      );
      if (location_index === -1) throw new Error("Location Not Found");
      locations[location_index] = {
        ...locations[location_index],
        ...data,
      };
      return locations[location_index];
    },
    deleteLocation: (parent, { id }) => {
      const location_index = locations.findIndex(
        (location) => location.id === id
      );
      if (location_index === -1) throw new Error("Location Not Found");
      const deletedlocation = locations[location_index];
      users.splice(location_index, 1);
      return deletedlocation;
    },
    deleteAllLocations: () => {
      const length = locations.length;
      locations.splice(0, length);
      return { count: length };
    },
    // Partipicant
    addParticipant: (parent, { data }) => {
      const participant = { id: nanoid(), ...data };
      participants.unshift(participant);
      return participant;
    },
    updateParticipant: (parent, { id, data }) => {
      const participant_index = participants.findIndex(
        (participant) => participant.id === id
      );
      if (participant_index === -1) throw new Error("Participant Not Found");
      participants[participant_index] = {
        ...participants[participant_index],
        ...data,
      };
      return participants[participant_index];
    },
    deleteParticipant: (parent, { id }) => {
      const participant_index = participants.findIndex(
        (participant) => participant.id === id
      );
      if (participant_index === -1) throw new Error("Location Not Found");
      const deletedparticipant = participants[participant_index];
      users.splice(participant_index, 1);
      return deletedparticipant;
    },
    deleteAllParticipants: () => {
      const length = participants.length;
      participants.splice(0, length);
      return { count: length };
    },
  },
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
