import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#004085" }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          🚖 Rapido
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Rides
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Offers
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light">Login</button>
            <button className="btn btn-light text-primary fw-bold">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
