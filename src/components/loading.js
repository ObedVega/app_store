import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/loading.css'
import Spinner from "react-bootstrap/Spinner";


export const Loading = () => {

    return (
    <>
    <div className="centered">
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="dark" />
    </div>
    </>
    )
  };
  