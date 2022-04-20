import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/admin.css';

export const Cuenta = () => {

    return (
      <>
        <form className="form-signin">
            <div className="text-center mb-4">
                <img className="mb-4" src="https://freepngimg.com/thumb/bear/89757-giant-head-bear-pandas-baby-logo-panda.png" alt="" width="72" height="72"/>
            </div>
            <div className="text-center mb-4">
                <h3>Crear tu cuenta para accesar al sistema</h3>
            </div>
            <div className="form-label-group">
                <input type="text" id="inputNombre" className="form-control" placeholder="Nombre" required="" autoFocus=""/>
            </div>
            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electronico" required="" autoFocus=""/>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required=""/>
            </div>

              <div className="form-label-group">
              <Link 
                to=""
                className='btn btn-lg btn-primary btn-block' 
              >
                Crear Cuenta
              </Link>
            </div>

            <p className="mt-5 mb-3 text-muted text-center">© 2022</p>
        </form>
        
      </>
    )
  };