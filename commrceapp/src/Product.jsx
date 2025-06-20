import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-bold">All Products</h2>

        <div className="row g-4">
          {products.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
              key={item.id}
            >
              <div className="card shadow-sm w-100 h-100">
                <img
                  src={item.images[0]}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text flex-grow-1">
                    {item.description.slice(0, 70)}...
                  </p>
                  <h6 className="text-success fw-bold">${item.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
