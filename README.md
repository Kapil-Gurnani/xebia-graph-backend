﻿# xebia-graph-backend

For running this backend server
1. npm install
2. npm start

We have 1 query which take 1 variable - 

    {
    "id": 1
    }

Query will be like this
    
    query GetPerson($id: Int!) {
      person(id: $id)  {
        name
        birth_year
        height
        homeworld {
          name
          climate
          terrain
        }
        films {
          title
          episode
        }
        vehicles {
          name
          class
          cost
          model
        }
        starships {
          name
          class
          cost
          model
        }
      }
    }
    }
