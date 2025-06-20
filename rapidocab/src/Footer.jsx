import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} Rapido Cab. All rights reserved.
        </p>

        <p className="mb-2">
          Contact us:{" "}
          <a href="mailto:support@rapido.com" className="text-white text-decoration-underline">
            support@rapido.com
          </a>{" "}
          | Phone: +91 12345 67890
        </p>

        <div className="d-flex justify-content-center gap-3 mt-2 flex-wrap">
          <a
            href="#"
            className="text-white"
            style={{ fontSize: "1.4rem" }}
            title="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="text-white"
            style={{ fontSize: "1.4rem" }}
            title="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="#"
            className="text-white"
            style={{ fontSize: "1.4rem" }}
            title="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
