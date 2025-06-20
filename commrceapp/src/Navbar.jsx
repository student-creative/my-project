import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const goToCart = () => navigate("/cart");

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        backgroundColor: isCollapsed ? "#f8f9fa" : "#0a3d62",
        transition: "0.3s",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbar-brand fw-bold fs-4 text-white">
          AryanStore
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            {["Home", "Products", "Deals", "Contact"].map((name) => (
              <li className="nav-item" key={name}>
                <Link
                  to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                  className="nav-link text-white fw-semibold px-3"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right-side buttons */}
          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 align-items-stretch align-items-lg-center">
            <input
              type="text"
              className="form-control form-control-sm rounded-pill px-3"
              placeholder="Search..."
              style={{ maxWidth: "180px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button
              className="btn btn-sm text-white"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              style={{
                backgroundColor: "#1e3799",
                borderRadius: "50px",
                padding: "5px 15px",
                fontWeight: "600",
              }}
            >
              Login
            </button>

            <button
              className="btn btn-sm text-white"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
              style={{
                backgroundColor: "#4a69bd",
                borderRadius: "50px",
                padding: "5px 15px",
                fontWeight: "600",
              }}
            >
              Sign Up
            </button>

            <button
              className="btn btn-sm btn-light position-relative rounded-pill px-3"
              onClick={goToCart}
            >
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
