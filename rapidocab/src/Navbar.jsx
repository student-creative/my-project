import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm"
        style={{ backgroundColor: "#004085" }}
      >
        <div className="container">
          {/* ✅ Fixed: Changed href="#" to to="/" */}
          <Link className="navbar-brand fw-bold text-white" to="/">
            🚖 Rapido
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav mx-auto text-center text-lg-start">
              <li className="nav-item">
                <Link className="nav-link active text-white fw-semibold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/rides">
                  Rides
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/offers">
                  Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-center mt-3 mt-lg-0">
              <button
                className="btn btn-outline-light fw-semibold w-100 w-lg-auto"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
              <button
                className="btn btn-outline-light fw-semibold w-100 w-lg-auto"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
