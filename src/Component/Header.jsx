import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; 

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <span className="fs-4"></span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/props" className="nav-link">
              Properties  
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fruitlist" className="nav-link">
              Fruit List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/handleformstate" className="nav-link">
              Handle Form State
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/handlestate" className="nav-link">
              Handle State
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/uccomponent" className="nav-link">
              UC Component
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/useeffect" className="nav-link">
              Use Effect
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/changebgcolour" className="nav-link">
              ChangeColour
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/backgroundchangecolor" className="nav-link">
              Background Change Colour
            </Link> 
          </li>
          <li className="nav-item">
            <Link to="/usecontext" className="nav-link">
              Use Context
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usecallback" className="nav-link">
              Use Callback
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usememo" className="nav-link">
              Use Memo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/useNavigate" className="nav-link">
              Use Navigate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/forms" className="nav-link">
              Forms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/apiconnectivity" className="nav-link">
              API Connectivity
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usezustand" className="nav-link">
              Use Zustand
            </Link>
          </li>
          
          
        
        </ul>
      </header>
    </div>
  );
}

export default Header;