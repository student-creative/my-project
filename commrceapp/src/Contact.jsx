import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="container py-5 px-3">
        <h2 className="text-center fw-bold mb-4">
          <FaEnvelope className="me-2" /> Contact Us
        </h2>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button className="btn btn-primary w-100">
                    <FaEnvelope className="me-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6">
            <div className="p-4 bg-light shadow-sm rounded text-center text-md-start h-100">
              <h5>
                <FaPhone className="me-2" /> +91 98765 43210
              </h5>
              <h5 className="mt-3">
                <FaEnvelope className="me-2" /> support@aryanstore.com
              </h5>
              <h5 className="mt-3">
                <FaMapMarkerAlt className="me-2" /> Surat, Gujarat, India
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
