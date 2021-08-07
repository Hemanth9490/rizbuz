import "./index.css";

const NavBar = () => (
  <nav
    id="navbarFixed"
    className="navbar navbar-expand-lg navbar-dark nav-bar-bg fixed-top"
  >
    <a className="navbar-brand" href="/">
      <img className="logo-image" src="./images/favicon.png" alt="logoImage" />
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
      <span className="navbar-toggler-icon"> </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" id="navItem1" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navItem2" href="/">
            Blog
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            id="navItem3"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Services
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/">
              Action
            </a>
            <a className="dropdown-item" href="/">
              Another action
            </a>
            <a className="dropdown-item" href="/">
              Action
            </a>
            <a className="dropdown-item" href="/">
              Another action
            </a>
            <div className="dropdown-divider"> </div>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navItem4" href="/">
            Contact us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="navItem5" href="/">
            Road Map
          </a>
        </li>
      </ul>
      <button className="btn btn-outline-light my-2 my-sm-0" type="button">
        Get Started
      </button>
    </div>
  </nav>
);
export default NavBar;
