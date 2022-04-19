import React, { useState } from "react";

 
 
export const Test = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [precio, setPrecio] = useState('');
    const [url, setUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');

    let dataInfo = {
        "id":id,
        "nombre": name,
        "precio": precio,
        "url": url,
        "descripcion":descripcion,
        "categoria":categoria
    }

    const handleInput = () =>{
        console.log(dataInfo);

        return fetch('https://app-itj-bootcamp.herokuapp.com/insProducts?id='+id+'&url='+url+'&name='+name+'&price='+precio+'&desc='+descripcion+'&cat='+categoria, {
            method: 'POST',
            //body: JSON.stringify(dataInfo),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)); 
    }

    
 
    return (
      <>
        <h1>Test</h1>
        <div className="col-sm-6">
            <div className="form-group">
                <label>id</label>
                <input type="number" className="form-control" onChange={e=>setId(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Precio</label>
                <input type="number" className="form-control" onChange={e=>setPrecio(e.target.value)}/>
            </div>
            <div className="form-group">
                <label >Categorias:</label>
                <input type="text" className="form-control" onChange={e=>setCategoria(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>url imagen</label>
                <input type="text" className="form-control" onChange={e=>setUrl(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Descripcion</label>  
                <textarea className="form-control" onChange={e=>setDescripcion(e.target.value)} rows="4" cols="40"/>
            </div>
            <br/>
            <div className="form-group">
                <button onClick={()=> handleInput()}>Boton</button>
            </div>
        </div>
      </>
    )
  };