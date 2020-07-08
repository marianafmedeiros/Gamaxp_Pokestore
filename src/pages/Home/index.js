import React from 'react'
import fetchApi from './fetchApi'
import { useState, useEffect } from 'react'
import CardContainer from '../../components/card'
import { Row, Container, Col, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap'
import Header from '../../components/header'
import Cart from '../../components/cart'

function Home(props) {
  const [ pokemons, setPokemons ] = useState([])
  const [ poke, setPoke ] = useState('')
  const [ counter, setCounter ] = useState(0)
  const [tobuy, setTobuy] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
       const data = await fetchApi();
       setPokemons(data);
    }
  
    fetchData();
  }, []);

  async function fetchPoke () {
    const data = await fetchApi(poke)
    setPokemons(data);
  }
    
  return (
    <>
    
      <Header />
      <Container>
        <h1>Welcome to the PokeStore! </h1>

        <InputGroup>
          <Input placeholder = "What pokemon are you looking for?" value = { poke } onChange = { e => setPoke(e.target.value)} />
          <InputGroupAddon addonType="append">
            <Button onClick = { fetchPoke } > Search </Button>
          </InputGroupAddon>
        </InputGroup>

        <br />
        <Row>

          <Col md = "8">
            <Row>
              { pokemons.map(pokemon =>
                <CardContainer key = { pokemon[0] } imgsrc = { pokemon[1] }  name = { pokemon[0] } price = { pokemon[2] }
                    onClick = {() => {
                      setTobuy( tobuy.concat([pokemon]) ) 
                      setCounter( counter + pokemon[2] )
                      } 
                }/>
              )}
            </Row>
          </Col>

          <Col style = {{ top : '12px' }} md = "4">
            <Cart tobuy = { tobuy } total = { counter } 
              onClick = {() => { 
                setTobuy([]) 
                setCounter(0)
                }
            
            } />
          </Col>

        </Row>
      </Container>
      
    </>
  );
}

export default Home;