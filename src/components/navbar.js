import React, {useContext} from "react";
import { Link } from "react-router-dom";
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
      <br/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#a">Navbar</a>
                <button 
                  className="navbar-toggler" 
                  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                              <Link 
                        to="/products"
                        className='' 
                      >
                        Products
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#a">Action</a>
                        <a className="dropdown-item" href="#a">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#a">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#a">Disabled</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
        </div>
        </nav>
     


<br/>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Link 
              to="/products"
              className='' 
            >
              Product List
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
            <Nav.Link href="/cart">{shoppingCart} Cart ({carrito.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
  };
  