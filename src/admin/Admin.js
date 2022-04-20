import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/admin.css';

export const Admin = () => {

    return (
      <>
        <form className="form-signin">
            <div className="text-center mb-4">
                <img className="mb-4" src="https://freepngimg.com/thumb/bear/89757-giant-head-bear-pandas-baby-logo-panda.png" alt="" width="72" height="72"/>
            </div>

            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
            </div>

            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
              <div className="form-label-group">
              <Link 
                to="/dashboard"
                className='btn btn-lg btn-primary btn-block' 
              >
                Sign in
              </Link>
            </div>
            <div className="form-label-group">
            <Link 
                to="/cuenta"
                className="me-auto" 
              >
                Crear cuenta
              </Link>
              <></>
              <Link 
                to="/reset"
                className="d-flex" 
              >
                Olvide mi contraseña
              </Link>
            </div>
            <p className="mt-5 mb-3 text-muted text-center">© 2022</p>
        </form>
        
      </>
    )
  };