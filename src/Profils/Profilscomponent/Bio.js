import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Bio() {
    const object =
  {
    nom: "Nom",
    phone: "(+216)",
    email: "E-mail",
    adress: "Adresse",
    img: "ness.jpeg"
  }
  return (
    <div className="Na">
    <p style={{ textAlign: "center", fontSize: "50px", fontFamily: "fantasy", paddingTop: "14px" ,width:"500px"}}>contact me </p>
    <Form className="From">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{object.nom}</Form.Label>
        <Form.Control type="text" placeholder="Enter nom" />
        <Form.Label>{object.email}</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>{object.phone}</Form.Label>
        <Form.Control type="number" placeholder="phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>{object.address}</Form.Label>
        <Form.Control type="address" placeholder="address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


  </div>
  )
}

export default Bio
