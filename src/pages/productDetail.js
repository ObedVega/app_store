import React from "react";
import { useParams  } from "react-router-dom";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";

export const ProductDetail = () => {
    let { id } = useParams();
    console.log(id);
    return(
        <Container fluid>
            <Row>
                <div className="text-center mt-5">
                    <h1>{id}</h1>
                </div>
            </Row>
            <Row>
                <div className="col-sm-7 p-3">a</div>
                <div className="col-sm-5 p-3">
                     
                        <h3 className="">
                            VA All The Way Snapback Hat
                        </h3>
                      
                    <div className="">
                        $ 30.00
                    </div>
                    <br/>
                    <div className="">
                        <button className="btn btn-color btn-sm">Add to cart</button>
                    </div>
                    <hr/>
                    <div className="">
                        Descripcion
                    </div>
                    <br/>
                    <div className="">
                        AN UPGRADED CLASSIC, THE VA ALL THE WAY SNAPBACK HAT TAKES IT UP A NOTCH WITH A MODERN FLAT BRIM AND RUBBERIZED LOGO AT THE FRONT PANEL. MADE FROM WOOL BLEND TWILL, THE MEN'S HAT IS FINISHED WITH A RVCA WOVEN LABEL AT THE ADJUSTABLE BACK.
                    </div>
                </div>
            </Row> 
        </Container>
    )   
  };