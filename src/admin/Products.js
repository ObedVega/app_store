import React  from 'react'
import { Link } from "react-router-dom";
import { useProducts } from '../api/useProducts';
import { Loading } from '../components/loading';

export const Productos = () => {

    const {data:dataProduct, isLoading:isLoadingProducts} = useProducts();

    if(isLoadingProducts){
      return (
        <Loading/>
      );
    }
    

    return (
        <>
        <div>
          <Link 
            to="/test"
            className='' 
          >
            Agregar Producto
          </Link>
        </div>
        <br/>
        <div className="table-responsive-sm">
        <table className="table table-striped table-hover responsive">
        <thead>
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Descripcion</th>
                <th>Image</th>
                <td></td>
                <td></td>
            </tr>
        </thead>
        <tbody>
        {dataProduct.map((item, i) => {
          return( 
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>  
            <td>{item.price}</td>
            <td>{item.categoria}</td>  
            <td>{item.descripcion}</td>
            <td>{item.img_url}</td> 
            <td><input type="button" value="Actualizar"/></td>
            <td><input type="button" value="Eliminar"/></td> 
          </tr>
          )
        })}
        </tbody>
        </table>
        </div>
        </>
    )
  };
  

 