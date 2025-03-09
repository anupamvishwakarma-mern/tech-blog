import logo from "../../assets/techB.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header nav-shadow" id="header-nav">
      <div className="px-3 py-2">
        <div className="container">
          <div className="nav d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="nav-logo d-flex align-items-center my-0 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img
                src={logo}
                alt="logo"
                className="h-13 w-auto"
                id="head-logo"
              />
              <span className="ms-3 text-xl">techB</span>
            </Link>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
