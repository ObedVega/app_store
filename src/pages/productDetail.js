import React from "react";
import { useParams  } from "react-router-dom";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";
import { useDetailProducts } from "../api/useDetailProduct";
import { Loading } from "../components/loading";

export const ProductDetail = () => {
    let { id } = useParams();
    const {data:dataProduct, isLoading:isLoadingProduct} = useDetailProducts(id);
 
    if(isLoadingProduct){
        return (
            <Container>
                <Row>
                <Loading/> 
                </Row>
            </Container>
        );
      }
    return(
        <Container>
            <Row>
            {dataProduct.map((item, i) => {
        return( 
            <>
            <div key={i} className="col-sm-7 p-3">
                <img  
                  className="img-fluid img_p"
                  src={item.img_url}
                  alt="" />
            </div>
            <div key={item.id} className="col-sm-5 p-3">
                <h3 className="">{item.name}</h3>
                <div key={item.id} className="">
                    $ {item.price}
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
        </>

        )
      })}  
            </Row>
        </Container>
    )   
  };