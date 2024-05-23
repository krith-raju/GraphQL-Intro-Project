const{gql} = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]

    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheatres: Boolean!
    }

    type Query {
        users: [User!]! 
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int = 18 ## default to 18 if the age is not passed in
        nationality: Nationality = AMERICAN ## Defaults to Brazil if not passed in 
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String! 
    }


    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        AMERICAN
        CANADIAN
        MEXICAN
        JAPANESE
        IRISH
    }

`;

module.exports = {typeDefs};