import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const  CardBox = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/500/500"/>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;