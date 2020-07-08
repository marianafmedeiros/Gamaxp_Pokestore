import React from 'react'
import { ListGroup, ListGroupItem, Button, Col } from 'reactstrap'
import styled from 'styled-components'

const Image = styled.img `
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 5px;
`
const liststyle = {
  boxShadow: '0 6px 12px 0 rgba(0,0,0,0.2)',
  
};

const Cart = (props) =>  {

  return(
    <>
      <ListGroup style = { liststyle }>
        <ListGroupItem key = "Cart Title" tag = "h3" style = {{ margin: 0, padding: '5px', textAlign: 'center' }}> 
          Your Cart
        </ListGroupItem>

        { props.tobuy.map(product => 
          <ListGroupItem key= { product[0] } style = {{ margin: '0', padding: '10px 15px' }}> 
              <Image src= { product[1] } alt= { product[0] }/>
              { product[0] }
              <span style = {{ float:'right', margin: '11px 0 0'  }}>$ { product[2] } </span> 
          </ListGroupItem>
        )}

        <ListGroupItem key= "Cart Total" style = {{ fontWeight: 'bold'}} >
          <span style = {{ float:'left'}} >Total</span>
          <span style = {{ float:'right'}}> $ { props.total } </span>
        </ListGroupItem>

      </ListGroup>
      
      <Col>
        <Button style = {{ margin: '15px 10%', width: '80%'}} onClick = { props.onClick }> Checkout </Button>
      </Col>
    </>

  )
}

export default Cart;