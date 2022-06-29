import React from 'react'
import logo1 from '../assets/images/logo.png'


export default function TopBar() {
  return (
    <div className="firstbar">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="brand">
            <a href="index.html">
              <img src={logo1} alt="Magz Logo"></img>
            </a>
          </div>						
        </div>
        <div className="col-md-6 col-sm-12">
          <form className="search" autocomplete="off">
            <div className="form-group">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Type something here"/>	

                <div className="input-group-btn">
                  <button className="btn btn-primary"><i className="ion-search"></i></button>
                </div>
              </div>
            </div>
            <div className="help-block">
              <div>Popular:</div>
              <ul>
                <li><a href="#">HTML5</a></li>
                <li><a href="#">CSS3</a></li>
                <li><a href="#">Bootstrap 3</a></li>
                <li><a href="#">jQuery</a></li>
                <li><a href="#">AnguarJS</a></li>
              </ul>
            </div>
          </form>								
        </div>
        <div className="col-md-3 col-sm-12 text-right">
          <ul className="nav-icons">
            <li><a href="register.html"><i className="ion-person-add"></i><div>Register</div></a></li>
            <li><a href="login.html"><i className="ion-person"></i><div>Login</div></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}
