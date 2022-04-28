import React   from 'react'
import { Link } from "react-router-dom";
import { useProducts } from '../api/useProducts';
import { Loading } from '../components/loading';

export const Productos = () => {
      const API_BASE_URL = 'https://app-itj-bootcamp.herokuapp.com';
      //const API_BASE_URL = 'http://localhost:5000';    
    const {data:dataProduct, isLoading:isLoadingProducts} = useProducts();
//    const [IdProduct, setIdProduct] = useState('');
//    alert(IdProduct);.
//const [name, setName] = useState('');
function updateProduct(itemId){
  console.log(itemId)
//  axios.get('https://jsonplaceholder.typicode.com/posts/' + postId, {
//      cancelToken: signal.token,
//  })
//      .then(res => {
//          console.log(res , 'res');
//          setPost(posts.filter(p => p.id !== postId));
//      }).catch(err => {
//      console.log(err);
//  });
}
function deleteProduct(itemId){
  console.log(itemId)                                                                        
  fetch(`${API_BASE_URL}/delProduct?id=${itemId}`, {
    method: 'DELETE', 
    //body: JSON.stringify(dataInfo),
    headers: {
        'Content-Type': 'application/json'
    },
  });
}


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
        {
        dataProduct.map((item, i) => {
         
          return( 
            
          <><tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.categoria}</td>
              <td>{item.descripcion}</td>
              <td>{item.img_url}</td>
              <td>
                <input type="button" value="Actualizar" onClick={() => updateProduct(item._id)} />
                <input type="button" value="Actualizar" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" />
              </td>
              <td><input type="button" value="Eliminar" className="btn btn-danger" onClick={() => deleteProduct(item._id)} /></td>
            </tr></>
          )
        })}
        </tbody>
        </table>
        </div>

        <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">

                    <div className="modal-header">
                      <h4 className="modal-title">Actualizar Producto</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label>Nombre</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Precio</label>
                          <input type="number" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Categorias:</label>
                          <select id="categorias" className="form-control">
                            <option value=" ">Seleccionar Categoria</option>
                            <option value="Tanks">Tanks</option>
                            <option value="Shorts">Shorts</option>
                            <option value="Camisas">Camisas</option>
                            <option value="Accesorios">Accesorios</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>url imagen</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Descripcion</label>
                          <textarea className="form-control" rows="4" cols="40" required />
                        </div>
                        <br />
                        <div className="form-group">
                          <button type="button" className='btn btn-primary'>Actualizar</button>
                        </div>
                      </form>
                    </div>


                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                  </div>
                </div>
              </div>
       
        </>
    )
  };
  

 