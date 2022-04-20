import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/productos.css'
import {CartContext} from '../components/context';
import { useProducts } from "../api/useProducts";
import { Loading } from "./loading";

export const Productos = () => {
  const {carrito, addToCarrito} = useContext(CartContext); 
  //alert(useProducts())
  const {data:dataProduct, isLoading:isLoadingProducts} = useProducts();
  const {search} = useLocation(); 
  
  //console.log(dataProduct);
  if(isLoadingProducts){
    return (<Loading/>);
  }

  console.log(carrito);

  //Obtener query parameters
  const queryParameter = new URLSearchParams(search);
  const categoria = queryParameter.get('category');
  let resultado;
  if (categoria){
    console.log(categoria);
    resultado = dataProduct.filter(
      prod => prod.categoria === categoria
    ); 
  } else {
    resultado = dataProduct;
  }
 
  return (
    <>
    <div className="grid">
    {resultado.map((item, i) => {
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
                  <button className="btn btn-color btn-sm" onClick={() => addToCarrito(item)}>Add to cart</button>
                </div>
            </div>        
        </>

        )
      })}   
    </div>
    </>

    )
  };
  