import React from 'react';
import styled from 'styled-components'
import myLogo from '../assets/logo_cafecotech.png'

const NavHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 80px;
  background-color: #ffb3b3;
  padding: 20px 10px;  
  margin-bottom: 20px; 
`



function Header() {
  return(
    <NavHeader style = {{ clear: 'both' }}> 
      <div style = {{ float: 'left'}} >
        <img src = "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" alt= "pokemon logo" />
        <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt = "pikachu" />
      </div>

      <a href = "https://marianafmedeiros.github.io/" style = {{ float: 'right', paddingRight: '10px'}}>
        <img src = { myLogo } style = {{ width: '80px', height: '80px' }} alt="my logo"/>
        
      </a>
    </NavHeader>
  )
}


export default Header;