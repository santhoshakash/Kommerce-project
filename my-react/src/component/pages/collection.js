// import "../css/style.css";
// import React, { useContext, useRef } from "react";
// import { Usercontext } from "../context/logincontext";

// export function Collection() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getNewArrivals());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getProductsByCount());
//   }, [dispatch]);

//   const { products } = useSelector((state) => state.products);
//   const { loading } = useSelector((state) => state.loading);

//   return (
//     <section> 
//     <hr className='py-4' />
// 						<h3 className='py-4'>Menu</h3>
// 						<div className='row'/>
// 							{products &&
// 								products.map(product => (
// 									<Card
// 										key={product._id}
// 										product={product}
// 										homePage={true}
// 									/>
// 								))}
//                 </section>
//     {/* <section>
//       <div class="container">
//         <div class="product-collection page-content">
//           <h2>Collections</h2>
//           <div class="products-grid row">
//             <div class="grid-item">
//               <div class="product-item">
//                 <div class="product-image">
//                   <a href="product.html">
//                     <img src="images/black-01.jpg" alt="" />
//                   </a>
//                 </div>
//                 <div class="product-content">
//                   <h3>
//                     <a href="product.html" class="product-title" title="">
//                       Basic Black T-Shirt{" "}
//                     </a>
//                   </h3>
//                   <div class="price">
//                     <div class="regular-price">
//                       <span>
//                         <span class="money">$200.00</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="grid-item">
//               <div class="product-item">
//                 <div class="product-image">
//                   <a href="product.html">
//                     <img src="images/green-01.jpg" alt="" />
//                   </a>
//                 </div>
//                 <div class="product-content">
//                   <h3>
//                     <a href="product.html" class="product-title" title="">
//                       Basic Green T-Shirt{" "}
//                     </a>
//                   </h3>
//                   <div class="price">
//                     <div class="regular-price">
//                       <span>
//                         <span class="money">$200.00</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="grid-item">
//               <div class="product-item">
//                 <div class="product-image">
//                   <a href="product.html">
//                     <img src="images/white-01.jpg" alt="" />
//                   </a>
//                 </div>
//                 <div class="product-content">
//                   <h3>
//                     <a href="product.html" class="product-title" title="">
//                       Basic White T-Shirt{" "}
//                     </a>
//                   </h3>
//                   <div class="price">
//                     <div class="regular-price">
//                       <span>
//                         <span class="money">$200.00</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="grid-item">
//               <div class="product-item">
//                 <div class="product-image">
//                   <a href="product.html">
//                     <img src="images/pink-01.jpg" alt="" />
//                   </a>
//                 </div>
//                 <div class="product-content">
//                   <h3>
//                     <a href="product.html" class="product-title" title="">
//                       Basic Pink T-Shirt{" "}
//                     </a>
//                   </h3>
//                   <div class="price">
//                     <div class="regular-price">
//                       <span>
//                         <span class="money">$200.00</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="grid-item">
//               <div class="product-item">
//                 <div class="product-image">
//                   <a href="product.html">
//                     <img src="images/floral.jpg" alt="" />
//                   </a>
//                 </div>
//                 <div class="product-content">
//                   <h3>
//                     <a href="product.html" class="product-title" title="">
//                       Floral Dress with Flounce
//                     </a>
//                   </h3>
//                   <div class="price">
//                     <div class="regular-price">
//                       <span>
//                         <span class="money">$200.00</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="grid-item">
//               <div class="product-item">
//                 <div class="product-image">
//                   <a href="product.html">
//                     <img src="images/men-shirt.jpg" alt="" />
//                   </a>
//                 </div>
//                 <div class="product-content">
//                   <h3>
//                     <a href="product.html" class="product-title" title="">
//                       Blend Long Sleeve Shirt
//                     </a>
//                   </h3>
//                   <div class="price">
//                     <div class="regular-price">
//                       <span>
//                         <span class="money">$200.00</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   ); */}
// }
