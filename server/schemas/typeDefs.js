const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: Int
    image: String
    link: String
  }
 
  type Query {
    me: User
  }

  type Auth {
    token: ID
    user: User
  }
type Mutation {
    login: (email: String, password: String): Auth
    addUser: 
    saveBook: 
    removeBook:
}
`;

module.exports = typeDefs;
