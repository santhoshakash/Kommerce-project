import "../css/style.css";
import React, { useContext, useRef } from "react";
import { Products } from "../../component/products";
import { Usercontext } from "../context/logincontext";

export function Collection() {
  //   const cat = location.pathname.split("/")[2];

  //   const handleFilters = (e) => {
  //     const value = e.target.value;
  //     setFilters({
  //       ...filters,
  //       [e.target.name]: value,
  //     });
  //   };

  return (
    <div class="main-content">
      <section>
        <div class="container">
          <div class="product-collection page-content">
            <h2>Collections</h2>
            <div class="products-grid row">
              <Products />
            </div>
          </div>
        </div>
      </section>
      <footer class="footer bg-white">
        <div class="container">This is footer section</div>
      </footer>
    </div>
  );
}
