import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/admin.css';

export const Admin = () => {

    return (
      <>
        <form className="form-signin">
            <div className="text-center mb-4">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            </div>

            <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
                <label htmlFor="inputEmail">Email address</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                <label htmlFor="inputPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
        </form>
      </>
    )
  };