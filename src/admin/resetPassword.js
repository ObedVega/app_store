import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/admin.css';

export const Reset = () => {

    return (
      <>
        <form className="form-signin">
        <div className="text-center mb-4">
                <img className="mb-4" src="https://freepngimg.com/thumb/bear/89757-giant-head-bear-pandas-baby-logo-panda.png" alt="" width="72" height="72"/>
            </div>
            <div className="text-center mb-4">
                <h3>Ingresa tu correo electronico para resetear tu contraseña</h3>
            </div>

            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
            </div>

              <div className="form-label-group">
              <Link 
                to="/"
                className='btn btn-lg btn-primary btn-block' 
              >
                Resetear Contraseña
              </Link>
            </div>
        </form>
        
      </>
    )
  };