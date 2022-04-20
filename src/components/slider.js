import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";

import slides from '../mock/slide.json';
export const info = slides;

export const Slider = () => {

    return (
        <Carousel>
        {
        info.slider.map((val,i) =>(
            <Carousel.Item key={i}>
                <img 
                    className="d-block w-100"
                    src={val.img_url}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{val.tema}</h3>
                    <p>{val.descripcion}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))
        }
        </Carousel>
    )
  };
  