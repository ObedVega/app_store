import React from "react";
import { Link } from "react-router-dom";
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
            category.categorias.map((val,i) =>(
                <div className="card card-body" key={i}>
                    <img
                        className=""
                        src={val.img_url}
                        alt="" />
                    <h3 className="text-left">
                        <Link 
                            to={`/products?category=${val.categoria}`}
                            className='color pad' 
                        >
                        {val.categoria}
                        </Link>
                    </h3>
                </div>     
            ))
            }
            </div>
        </div>
        </>
    )
  };
  