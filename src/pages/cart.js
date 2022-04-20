import React, {useContext} from 'react';
import { CartContext } from '../components/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";
import '../css/cart.css';

function sumelem(array){
    console.log(array);
    let sum = 0
    for (let i = 0; i < array.length; i += 1) {
        alert(i);
        alert(array[i].price);
        sum += array[i].price;
        }
        
    return sum
}

export const Cart = () => {
    const {carrito, addToCarrito} = useContext(CartContext);   
    let newCarrito = [...carrito]
    let sumTotal = sumelem(newCarrito);
 
    const items =  carrito.length;
    console.log(addToCarrito);
 
   
  return (
      
    <Container>

    <Row>
        <div className="text-center mt-5">
            <h1>Shopping Cart</h1>
        </div>
    </Row>

    <Row>
        <div className="col-sm-9 p-3">
        {carrito.map((articulo)=>{
        return(
            <div>
            <div className="card card-body border-0">
                <div className="row no-gutters py-2">
                    <div className="col-sm-2 p-2">
                        <img alt="Bacardi Breezer - Tropical" src={articulo.img_url} className="img-fluid d-block style_img" />
                    </div>
                    <div className="col-sm-4 p-2">
                        <h5 className="mb-1">{articulo.name} </h5>
                        <p className="mb-1"> ${articulo.price}  </p>
                    </div>
                    <div className="col-sm-2 p-2 text-center ">
                        <p className="mb-0">Qty: 1</p>
                    </div>
                    <div className="col-sm-4 p-2 text-right">
                        <button className="btn btn-primary btn-sm mr-2 mb-1">
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" 
                                    clipRule="evenodd" fillRule="evenodd">
                                </path>
                            </svg>
                        </button>
                        <button className="btn btn-danger btn-sm mb-1">
                            <svg width="20px" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                                    clipRule="evenodd" fillRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
             </div>
        </div>
            

        );
    })}
        </div>
        <div className="col-sm-3 p-3">
            <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{items}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">${sumTotal}</h3>
                <hr className="my-4"/>
                <div className="text-center">
                    <a href="#a" className="btn btn-primary mb-2">CHECKOUT</a>
                    <button type="button" className="btn btn-outlineprimary btn-sm">CLEAR</button>
                </div>
            </div>
        </div>
    </Row>
</Container>
  )
};


