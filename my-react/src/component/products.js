import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

import { Link } from "react-router-dom";
import axios from "axios";

export const Products = ({ cat }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  return (
    <>
      {products.map((product) => (
        <div className="grid-item" key={product._id}>
          <div className="product-item">
            <div className="product-image">
              <Link to={`/products/${product._id}`}>
                <div className="shopBack">
                  <img src={product.images} alt={product.name} />
                </div>
              </Link>
            </div>
            <div className="product-content">
              <p>
                <Link to={`/products/${product._id}`}>{product.name}</Link>
              </p>
              <div className="price">
                <div className="regular-price">
                  <span>
                    <span className="money">{product.price}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// export default Products;
