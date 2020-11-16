import React from "react";
import Logo from "./../assets/Logo.png";


export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
        <img src={Logo} alt="Logo Baufest" />
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info"></span>
        </ul>
      </div>
    </nav>
  );
};
