const { gql } = require('apollo-server');

export const typeDefs = gql`
  type Films {
    title: String
    episode: Int
  }
  type Vehicles {
    name: String
    model: String
    class: String
    cost: Int
  }
  type Starships {
    name: String
    model: String
    class: String
    cost: Int
  }
  type Homeworld {
    name: String
    climate: String
    terrain: String
  }
  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: Homeworld
    films: [Films]
    species: [String]
    vehicles: [Vehicles]
    starships: [Starships]
    created: String
    edited: String
    url: String
  }
  type Query {
    person(id: Int!): Person
  }
`;
