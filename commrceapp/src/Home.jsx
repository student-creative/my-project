import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const goToCart = () => {
    navigate("/cart", { state: { cart } });
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{ backgroundColor: "#0a3d62", minHeight: "56px" }}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold text-white fs-4"
            href="#"
            style={{ letterSpacing: "1.5px" }}
          >
            🛍 AryanStore
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["Home", "Products", "Deals", "Contact"].map((item) => (
                <li key={item} className="nav-item mx-2">
                  <a
                    className="nav-link text-white fw-semibold"
                    href="#"
                    style={{ letterSpacing: "0.8px" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center gap-2">
              <input
                type="text"
                className="form-control form-control-sm rounded-pill px-3"
                placeholder="Search..."
                style={{ width: "180px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                style={{
                  backgroundColor: "#1e3799",
                  color: "white",
                  borderRadius: "50px",
                  padding: "5px 15px",
                  fontWeight: "600",
                  boxShadow: "0 2px 6px rgba(30, 55, 153, 0.6)",
                }}
              >
                Login
              </button>
              <button
                className="btn btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                style={{
                  backgroundColor: "#4a69bd",
                  color: "white",
                  borderRadius: "50px",
                  padding: "5px 15px",
                  fontWeight: "600",
                  boxShadow: "0 2px 6px rgba(74, 105, 189, 0.6)",
                }}
              >
                Sign Up
              </button>
              <button
                className="btn btn-sm btn-light position-relative rounded-pill px-3"
                onClick={goToCart}
              >
                🛒
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

      {/* Carousel */}
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("./img/slider1.jpg")}
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./img/slider2.jpg")}
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./img/slider3.jpg")}
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
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

      {/* Product Cards */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">🛒 Latest Products</h2>
        <div className="row g-4">
          {filteredProducts.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={item.images[0]}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description.slice(0, 60)}...</p>
                  <h6 className="fw-bold text-success">${item.price}</h6>
                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-outline-primary w-50"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button className="btn btn-primary w-50">Buy Now</button>
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
          <p className="mb-1">© {new Date().getFullYear()} AryanStore. All rights reserved.</p>
          <small>Designed with ❤️ using React + Bootstrap</small>
        </div>
      </footer>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
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
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Full Name" className="form-control mb-3" />
              <input type="email" placeholder="Email" className="form-control mb-3" />
              <input type="password" placeholder="Password" className="form-control mb-3" />
              <button className="btn btn-info w-100 text-white">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default Home;
