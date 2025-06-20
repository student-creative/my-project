import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "./Navbar";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (item) => {
    const exists = cart.find((p) => p.id === item.id);
    if (!exists) {
      setCart([...cart, item]);
      toast.success(`${item.title} added to cart!`);
    } else {
      toast.info(`${item.title} is already in cart.`);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar
        cart={cart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Carousel */}
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {["slider1.jpg", "slider2.jpg", "slider3.jpg"].map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={require(`./img/${img}`)}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Products */}
      <div className="container mt-5 px-3">
        <h2 className="text-center fw-bold mb-4">
          <FaShoppingCart className="me-2" /> Latest Products
        </h2>
        <div className="row g-4">
          {filteredProducts.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={item.images[0]}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.description.slice(0, 60)}...
                  </p>
                  <h6 className="fw-bold text-success">${item.price}</h6>
                  <div className="mt-auto d-flex gap-2 flex-column flex-md-row">
                    <button
                      className="btn w-100"
                      onClick={() => addToCart(item)}
                      style={{
                        background: "linear-gradient(135deg, #38ada9, #079992)",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(7, 153, 146, 0.6)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "translateY(-3px)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "translateY(0)")
                      }
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn w-100"
                      style={{
                        background: "linear-gradient(135deg, #e58e26, #f39c12)",
                        color: "white",
                        fontWeight: "700",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(243, 156, 18, 0.6)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "translateY(-3px)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "translateY(0)")
                      }
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1">
            © {new Date().getFullYear()} AryanStore. All rights reserved.
          </p>
          <small>Designed with React + Bootstrap</small>
        </div>
      </footer>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
              />
              <button className="btn btn-primary w-100">Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
              />
              <button className="btn btn-info w-100 text-white">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
}

export default Home;
