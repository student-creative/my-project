import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Rapido Cab. All rights reserved.</p>
        <p>
          Contact us: <a href="mailto:support@rapido.com" className="text-white">support@rapido.com</a> | Phone: +91 12345 67890
        </p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2" style={{ fontSize: "1.3rem" }} title="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white mx-2" style={{ fontSize: "1.3rem" }} title="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-white mx-2" style={{ fontSize: "1.3rem" }} title="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
