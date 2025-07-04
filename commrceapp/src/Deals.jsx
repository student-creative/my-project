import React from "react";
import { FaTags } from "react-icons/fa";
import Navbar from "./Navbar";

function Deals() {
  return (
    <div>
      <Navbar />

      <div className="container py-5 px-3">
        <h2 className="text-center fw-bold mb-3">
          <FaTags className="me-2" /> Best Deals
        </h2>

        <p className="text-center mb-4">
          Grab the hottest deals and save big on your favorite products.
        </p>

        <div className="row g-4">
          {[1, 2, 3].map((deal) => (
            <div className="col-12 col-md-4" key={deal}>
              <div className="card shadow-lg border-0 bg-light h-100">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">Deal {deal}</h5>
                    <p className="card-text">
                      Limited time offer! Don't miss out on this special deal.
                    </p>
                  </div>
                  <button className="btn btn-warning fw-bold mt-3">
                    <FaTags className="me-2" /> Claim Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deals;
