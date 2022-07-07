import React from "react";
import HomeIcon from "@material-ui/icons/Home";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand x" href="/">
        <HomeIcon className="homeIcon" />
        Estatery
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link x z" href="/">
              Rent <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item x">
            <a className="nav-link" href="/">
              Buy
            </a>
          </li>
          <li className="nav-item x">
            <a className="nav-link" href="/">
              Sell
            </a>
          </li>
          <li className="nav-item dropdown x">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Manage Property
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown x">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button type="button" className="btn btn-outline-primary a">
            Login
          </button>
          <button type="button" className="btn btn-primary b">
            Sign up
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
