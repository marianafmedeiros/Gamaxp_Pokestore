import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button, 
  Col, CardText
} from 'reactstrap';

const cardstyle = {
  boxShadow: '0 6px 12px 0 rgba(0,0,0,0.2)',
  backgroundColor: '#faeb8c', 
  margin: '12px 0px',
};

const CardContainer = (props) => {
  return (
    <Col md="4">
      
      <Card outline color = "light" style={ cardstyle }> 
        <CardImg style = {{ backgroundColor: '#ededed'}} top width="100%" src= { props.imgsrc } alt="Pokemon Image" />
        <CardBody>
          <CardTitle> { props.name } </CardTitle>
          <CardText> Price: $ { props.price } </CardText>
          <Button onClick = { props.onClick } >Buy!</Button>
        </CardBody>
      </Card>
      
    </Col>
  
  );
};

export default CardContainer;
