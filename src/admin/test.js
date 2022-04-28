import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom" 
 
export const Test = () => {
    const [name, setName] = useState('');
    const [precio, setPrecio] = useState('');
    const [url, setUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    //let [data, setData] = useState('');
    const navigate = useNavigate();
    const API_BASE_URL = 'https://app-itj-bootcamp.herokuapp.com';
    //const API_BASE_URL = 'http://localhost:5000';
 
    const handleSubmit = () =>{
       
    //    fetch('https://localhost:5000/insProducts?id='+id+'&url='+url+'&name='+name+'&price=' + precio + '&desc=' + descripcion + '&cat=' + categoria, {
    //    const res = fetch('https://app-itj-bootcamp.herokuapp.com/insProducts?id=' + id + '&url=' + url + '&name=' + name + '&price=' + precio + '&desc=' + descripcion + '&cat=' + categoria, {
        fetch(`${API_BASE_URL}/insProducts?url=${url}&name=${name}&price=${precio}&desc=${descripcion}&cat=${categoria}`, {
            method: 'POST',
            //body: JSON.stringify(dataInfo),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        //setData(data = res.json());
        //return console.log(data); 
        navigate('/productos', { replace: true });
    }

    
 
    return (
      <>
        <h1>Test</h1>
        <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" onChange={e=>setName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label>Precio</label>
                <input type="number" className="form-control" onChange={e=>setPrecio(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label >Categorias:</label>
                <select id="categorias" onChange={e=>setCategoria(e.target.value)} className="form-control">
                <option value=" ">Seleccionar Categoria</option>  
                  <option value="Tanks">Tanks</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Camisas">Camisas</option>
                  <option value="Accesorios">Accesorios</option>
                </select>
            </div>
            <div className="form-group">
                <label>url imagen</label>
                <input type="text" className="form-control" onChange={e=>setUrl(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label>Descripcion</label>  
                <textarea className="form-control" onChange={e=>setDescripcion(e.target.value)} rows="4" cols="40" required/>
            </div>
            <br/>
            <div className="form-group">
                <button type="submit btn btn-dark">Insertar Nuevo Producto</button>
            </div>
            </form>
        </div>
      </>
    )
  };