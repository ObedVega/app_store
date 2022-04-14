import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/categorias.css'; 

import cat from '../mock/categorias.json';
export const category = cat;

export const Categorias = () => {
    
    return (
        <>
        <div className="row">
            <div className="grid">
            {
            category.categorias.map((val) =>(
                <div className="card card-body" key={val.id}>
                    <img
                        className=""
                        src={val.img_url}
                        alt="" />
                    <h3 className="text-left"> <a href={`/products?category=${val.categoria}`}>{val.categoria}</a></h3>
                </div>     
            ))
            }
            </div>
        </div>
        </>
    )
  };
  