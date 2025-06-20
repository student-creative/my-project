import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (location.state && location.state.cart) {
      setCartItems(location.state.cart);
    }
  }, [location.state]);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">🛒 Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty!</h4>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Go back to shopping
          </button>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="card shadow-sm border-0">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.images[0]}
                        className="img-fluid rounded-start"
                        alt={item.title}
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description.slice(0, 60)}...</p>
                        <h6 className="text-success fw-bold">${item.price}</h6>
                        <button
                          className="btn btn-outline-danger btn-sm mt-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-5 p-4 bg-light rounded shadow text-end">
            <h4>Total Price: <span className="text-success">${getTotal()}</span></h4>
            <button className="btn btn-success mt-3">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
