import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SpecialCard = ({ image, title, description }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <button type='button' className='btn btn-primary'>Order Delivery</button>
      </Card.Body>
    </Card>
  );
}

export default SpecialCard;
