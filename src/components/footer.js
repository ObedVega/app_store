import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {

    return (
      <>
      <div className="container">
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src="https://freepngimg.com/thumb/bear/89757-giant-head-bear-pandas-baby-logo-panda.png" alt="" width="24" height="24"/>
        <small className="d-block mb-3 text-muted">© 2022</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#a">Cool stuff</a></li>
          <li><a className="text-muted" href="#a">Random feature</a></li>
          <li><a className="text-muted" href="#a">Team feature</a></li>
          <li><a className="text-muted" href="#a">Stuff for developers</a></li>
          <li><a className="text-muted" href="#a">Another one</a></li>
          <li><a className="text-muted" href="#a">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#a">Resource</a></li>
          <li><a className="text-muted" href="#a">Resource name</a></li>
          <li><a className="text-muted" href="#a">Another resource</a></li>
          <li><a className="text-muted" href="#a">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#a">Team</a></li>
          <li><a className="text-muted" href="#a">Locations</a></li>
          <li><a className="text-muted" href="#a">Privacy</a></li>
          <li><a className="text-muted" href="#a">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
      </div>

      </>
    )
  };