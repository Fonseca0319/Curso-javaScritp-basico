// instalar axios para hacer llamados a servicios externos

import axios from "axios"

const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("Success!!")
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!")
    console.log(error);
  })
  