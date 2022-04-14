import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

import { Slider } from "../components/slider";
import { Categorias } from "../components/categorias";
import { Productos } from "../components/productos";

export const Home = () => {

    return (
        <>
        <br/>
        <Container>
            <Row>
                <Slider/>
            </Row>
        </Container>
        <br/>
        <Container>
            <div>
                <h1><p className="center">Categorias</p></h1>
                <hr className="line"/>
            </div>
            <Categorias/>
        </Container>
        <br/>
        <Container>
            <Row>
                <div>
                    <h1><p className="center">Productos</p></h1>
                    <hr className="line"/>
                </div>
                <Productos/>
            </Row>
        </Container>
        </>
    )
  };
  