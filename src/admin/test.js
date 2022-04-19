import React, { useState } from "react";

 
 
export const Test = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [precio, setPrecio] = useState('');

    let dataInfo = {
        "id":id,
        "nombre": name,
        "precio": precio
    }

    const handleInput = () =>{
        console.log(dataInfo);
        return fetch('https://app-itj-bootcamp.herokuapp.com/insProducts?id='+id, {
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
        <div>
            <input type="number" onChange={e=>setId(e.target.value)}/>
        </div>
        <input type="text" onChange={e=>setName(e.target.value)}/>
        <input type="number" onChange={e=>setPrecio(e.target.value)}/>
        <div>
        <button onClick={()=> handleInput()}>Boton</button>
        </div>
        
      </>
    )
  };