import React, {useContext} from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav"; 
import NavDropdown from "react-bootstrap/NavDropdown"; 
import Form from "react-bootstrap/Form"; 
import FormControl from "react-bootstrap/FormControl"; 
import Button from "react-bootstrap/Button"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import {CartContext} from "../components/context";

const shoppingCart = <FontAwesomeIcon icon={faCartShopping} />

export const BarMenu = () => {
    const {carrito, setCarrito} = useContext(CartContext); 
    if(setCarrito){
      return (<p>Cargando</p>);
  }
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/home">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="d-flex me-2"> 
            <Nav.Link href="/cart">{shoppingCart} Cart ({carrito.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  };
  