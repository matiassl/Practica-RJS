import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cardBox.css"

const  CardBox = ({data}) => {
  return (
    <Card style={{ width: '18rem' }} className='col-sm-3 card-box my-2 mx-2'>
      <Card.Img variant="top" src={data.image} className='img-fluid imagen'/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>
          <p>${data.price}</p>
        </Card.Text>
        <Button variant="success" className="mt-auto">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;