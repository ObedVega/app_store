import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
 

 
export const InsProducto = () => {


    return (
      <>
        <h1>Insertar Producto</h1>
        <div className="col-sm-4">
            <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">id</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1"
                />
 
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail2"/>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputEmail3">Precio</label>
              <input type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="  "/>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputEmail4">Categoria</label>
              <input type="text" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" placeholder="  "/>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputEmail5">Url imagen</label>
              <input type="text" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" placeholder="  "/>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputEmail6">Descripcion</label>
              <textarea className="form-control" id="exampleInputEmail6" name="w3review" rows="4" cols="40"/>
            </div>
          
            <br/>
            <button type="submit" className="btn btn-primary"  >Submit</button>
            </form> 
        </div>
      </>
    )
  };