const UserList = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      age: 28,
      nationality: "AMERICAN",
      friends: [{
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        age: 34,
        nationality: "CANADIAN"
      }, {
        id: 3,
        name: "Carlos Mendoza",
        username: "carlosm",
        age: 25,
        nationality: "MEXICAN"
      },]

    },

    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      age: 34,
      nationality: "CANADIAN"
    },

    {
      id: 3,
      name: "Carlos Mendoza",
      username: "carlosm",
      age: 25,
      nationality: "MEXICAN"
    },
    
    {
      id: 4,
      name: "Yuki Tanaka",
      username: "yukit",
      age: 30,
      nationality: "JAPANESE"
    },

    {
      id: 5,
      name: "Liam O'Connor",
      username: "liamo",
      age: 27,
      nationality: "IRISH"
    }

  ];

  const MovieList = [
    {
      id: 1,
      name: "The Great Adventure",
      yearOfPublication: 2021,
      isInTheatres: true
    },
    {
      id: 2,
      name: "Mystery of the Lost City",
      yearOfPublication: 2019,
      isInTheatres: false
    },
    {
      id: 3,
      name: "Space Odyssey",
      yearOfPublication: 2022,
      isInTheatres: true
    },
    {
      id: 4,
      name: "Romance in Paris",
      yearOfPublication: 2020,
      isInTheatres: false
    },
    {
      id: 5,
      name: "The Haunted Mansion",
      yearOfPublication: 2018,
      isInTheatres: false
    }
  ];
  


  module.exports = { UserList, MovieList };
