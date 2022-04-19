import React, {useContext, useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/productos.css'
import {CartContext} from '../components/context';
import prod from '../mock/productos.json';
export const articulo = prod;
 
export const Productos = () => {
    const [Products, setProducts] = useState([])
    const getData = () => {

        fetch('https://app-itj-bootcamp.herokuapp.com/getProducts')
        .then((res) => res.json())
        .then((res) => {
          setProducts(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])
    const {carrito, addToCarrito} = useContext(CartContext); 
    console.log(carrito);



    return (
    <>
    <div className="grid">
    {Products.map((item, i) => {
        return( 
            <>
            <div key={i} className="card card-body">
                <img
                  className="img-fluid img_p"
                  src={item.img_url}
                  alt="" />
                <p>{item.name}</p>
                <h3 className="text-left">${item.price}</h3>
                <div className="text-right">
                  <Link
                    to={`/products/${item.id}`}
                    className='p-2 link-secondary nodec'
                 >
                    Details
                  </Link>
                  <button className="btn btn-color btn-sm" onClick={() => addToCarrito(articulo)}>Add to cart</button>
                </div>
            </div>        
        </>

        )
      })}   
    </div>
    </>

    )
  };
  