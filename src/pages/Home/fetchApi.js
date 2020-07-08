const axios = require ('axios')

async function fetchApi(pokemon = null) {
  let pokemons = []
  if (!pokemon) { 
    for (let i = 1; i < 10; i++) {
      const URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
      await axios
        .get(URL)
        .then(response => {
          let { name, sprites, height } = response.data
          let img = sprites.front_shiny ? sprites.front_shiny : sprites.front_default
          height = parseInt(height)
          name = name.charAt(0).toUpperCase() + name.slice(1)
          pokemons.push([name, img, height])
        })
        .catch(err => {
          alert("There was an error" , err)
        })
    }
  } else {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    await axios
      .get(URL)
      .then(response => {
        let { name, sprites, height } = response.data
        let img = sprites.front_shiny ? sprites.front_shiny : sprites.front_default
        height = parseInt(height)
        name = name.charAt(0).toUpperCase() + name.slice(1)
        pokemons.push([name, img, height])
      })
      .catch(err => {
        alert("Sorry! We could not find this pokemon!")
      })
  }


  return pokemons
  
}

export default fetchApi;