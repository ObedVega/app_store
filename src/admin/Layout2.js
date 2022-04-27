import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/dashboard.css';
 

export const Layout2 = () => {

    return (
      <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#s">Choping</a>

        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#a">Sign out</a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
              <Link 
                to="/dashboard"
                className='nav-link' 
              > Dashboard
              </Link>
              </li>
              <li className="nav-item">
              <Link 
                to="/productos"
                className='nav-link' 
              >   Productos
              </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <br/>
          
          <Outlet />
      
        </main>
      </div>
    </div>
        
      </>
    )
  };