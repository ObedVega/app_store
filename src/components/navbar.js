import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/nav.css';
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
  const [searchText, setSearchText] = useState("");  
  const {carrito, setCarrito} = useContext(CartContext); 

  let navigate = useNavigate();
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  const onSubmit = (event) =>{
    event.preventDefault();
    navigate(`/search?q=${searchText}`);
  };
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
                <img 
                  src="https://freepngimg.com/thumb/bear/89757-giant-head-bear-pandas-baby-logo-panda.png" 
                  alt=""
                  width="24" 
                  height="24"
                  /> Panda Style
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
              <NavDropdown title="Links" id="basic-nav-dropdown">
              <Link 
                to="/admin"
                className='color pad' 
              >
                Admin
              </Link>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Button onClick={onSubmit} variant="outline-success">Search</Button>
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
  