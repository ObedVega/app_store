import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/productos.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";

import { Productos } from "../components/productos";
import { Link } from "react-router-dom";
import cat from '../mock/categorias.json';
export const category = cat;


export const Products = () => {

    return (
        <>
        <br/>
        <Container>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <a className="p-2 link-secondary" href="/products">All Products</a>
            {
            category.categorias.map((val, i) =>(
               <>
                <Link key={i}
                    to={`/products?category=${val.categoria}`}
                    className="p-2 link-secondary"
                >
                    {val.categoria}
                </Link>
                </>  
            ))
            }   
            </nav>
        </div>
            <Row>
                <Productos/>
            </Row>
        </Container>
        </>
    )
  };
  