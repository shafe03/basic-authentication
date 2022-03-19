import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom p-4">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            {/* <svg className="bi me-2" width="40" height="32">
              <use xlink:to="#bootstrap"></use>
            </svg> */}
            <span className="fs-4">S|Ledger</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQs" className="nav-link">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
