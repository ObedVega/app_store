import React, {useContext}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/productos.css'
import {CartContext} from '../components/context';
import prod from '../mock/productos.json';
export const articulo = prod;
 
export const Productos = () => {

    const {carrito, addToCarrito} = useContext(CartContext); 
    console.log(carrito);
    return (
    <>
    <div className="grid">
    {
      articulo.productos.map((val) =>(
        <>
        <div className="card card-body" >
            <img
                className="img-fluid img_p"
                src={val.img_url}
                alt="" />
            <p >{val.name}</p>
            <h3 className="text-left" key={val.id}>${val.price}</h3>
            <div className="text-right">
                <a className="btn btn-link btn-sm mr-2" key={val.id} href={`/products/${val.id}`}>Details</a>
  
                <button className="btn btn-color btn-sm" onClick={()=>addToCarrito(articulo)}>Add to cart</button>
            </div>
        </div>
        </>
        ))
    }
    </div>
    </>
    )
  };
  