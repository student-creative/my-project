import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RapidoCab() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [rideType, setRideType] = useState("bike");
  const [distance, setDistance] = useState(null);
  const [fare, setFare] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [error, setError] = useState("");

  const fareConfig = {
    bike: { base: 30, perKm: 8, label: "Bike", icon: "🏍️" },
    auto: { base: 50, perKm: 12, label: "Auto", icon: "🚗" },
    car: { base: 100, perKm: 18, label: "Car", icon: "🚘" },
  };

  useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const calculateDistance = () => Math.floor(Math.random() * 10) + 1;

  const handleEstimate = () => {
    setError("");
    if (!pickup.trim() || !drop.trim()) {
      setError("Please enter both pickup and drop locations.");
      return;
    }
    if (pickup.trim().toLowerCase() === drop.trim().toLowerCase()) {
      setError("Pickup and drop locations cannot be the same.");
      return;
    }
    const dist = calculateDistance();
    setDistance(dist);
    const config = fareConfig[rideType];
    const estFare = config.base + dist * config.perKm;
    setFare(estFare);
    setBookingStep(2);
  };

  const handleConfirm = () => setBookingStep(3);
  const handleFinalize = () => setBookingStep(4);

  const handleReset = () => {
    setPickup("");
    setDrop("");
    setRideType("bike");
    setDistance(null);
    setFare(null);
    setError("");
    setBookingStep(1);
  };

  return (
    <div
      className="container shadow rounded-4 p-4 mt-5"
      style={{ maxWidth: "480px", backgroundColor: "#fff" }}
    >
      <h2 className="mb-4 text-center fw-bold text-primary">Rapido Cab Booking</h2>

      {bookingStep === 1 && (
        <>
          <div className="mb-3">
            <label htmlFor="pickup" className="form-label fw-semibold">
              📍 Pickup Location
            </label>
            <input
              id="pickup"
              type="text"
              className="form-control"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="drop" className="form-label fw-semibold">
              🏁 Drop Location
            </label>
            <input
              id="drop"
              type="text"
              className="form-control"
              placeholder="Enter drop location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold mb-2">Select Ride Type</label>
            <div className="d-flex justify-content-between">
              {Object.entries(fareConfig).map(([key, { label, icon }]) => (
                <div
                  key={key}
                  onClick={() => setRideType(key)}
                  className={`flex-fill mx-1 p-3 text-center rounded-3 cursor-pointer border ${
                    rideType === key
                      ? "border-primary bg-primary text-white"
                      : "border-secondary"
                  }`}
                  style={{ userSelect: "none", transition: "all 0.3s ease" }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setRideType(key);
                    }
                  }}
                  aria-pressed={rideType === key}
                >
                  <div style={{ fontSize: "2rem" }}>{icon}</div>
                  <div className="fw-semibold mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div
              className="alert alert-danger py-2"
              role="alert"
              style={{ fontSize: "0.9rem" }}
            >
              ⚠️ {error}
            </div>
          )}

          <button
            className="btn btn-primary w-100 fw-semibold"
            onClick={handleEstimate}
            type="button"
          >
            Estimate Fare
          </button>
        </>
      )}

      {bookingStep === 2 && (
        <>
          <div className="alert alert-info text-center fw-semibold rounded-3 mb-4">
            🚖 Estimated Fare:{" "}
            <span className="text-success fw-bold">
              ₹{fare} for {distance} km ({fareConfig[rideType].label})
            </span>
          </div>

          <div className="d-flex gap-3">
            <button
              className="btn btn-outline-secondary flex-grow-1 fw-semibold"
              onClick={() => setBookingStep(1)}
              type="button"
            >
              Edit
            </button>
            <button
              className="btn btn-primary flex-grow-1 fw-semibold"
              onClick={handleConfirm}
              type="button"
            >
              Book Ride
            </button>
          </div>
        </>
      )}

      {bookingStep === 3 && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="confirmModalTitle"
          onClick={() => setBookingStep(2)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmModalTitle">
                  Confirm Booking
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setBookingStep(2)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Please confirm your booking for a{" "}
                  <strong>{fareConfig[rideType].label}</strong> ride from{" "}
                  <strong>{pickup}</strong> to <strong>{drop}</strong>.
                </p>
                <p>
                  Estimated fare:{" "}
                  <strong className="text-success">
                    ₹{fare} ({distance} km)
                  </strong>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setBookingStep(2)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFinalize}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {bookingStep === 4 && (
        <div className="text-center">
          <div
            className="mb-3"
            style={{ fontSize: "4rem", userSelect: "none" }}
            aria-hidden="true"
          >
            🎉
          </div>
          <h4 className="fw-bold mb-3">
            Your {fareConfig[rideType].label} ride is booked!
          </h4>
          <p>
            From <b>{pickup}</b> to <b>{drop}</b>, distance: <b>{distance} km</b>
            <br />
            Estimated fare: <b>₹{fare}</b>
          </p>
          <button
            className="btn btn-primary mt-4"
            onClick={handleReset}
            type="button"
          >
            Book Another Ride
          </button>
        </div>
      )}
    </div>
  );
}

export default RapidoCab;
