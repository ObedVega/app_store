import React, {useContext} from "react";
import { Link } from "react-router-dom";
import '../css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav"; 
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
      <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
          <Link 
                to="/home"
                className='color pad' 
              >
                STORE
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link 
                to="/home"
                className='color pad' 
              >
                Home
              </Link>
              <Link 
                to="/products"
                className='color pad' 
              >
                Products
              </Link>
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
              <Link 
                to="/cart"
                className='color pad' 
              >
                {shoppingCart} Cart ({carrito.length})
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
  };
  