import React, { useContext } from "react";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Collection } from "../pages/collection";
import { Productdetails } from "../pages/productdetails";
import { Cart } from "../pages/cart";
import { Header } from "../pages/header";
import { Authentication } from "../context/authentication";
import { Usercontext } from "../context/logincontext";
import { Routes, Route } from "react-router";

export const Firstroutes = () => {
  const { values } = useContext(Usercontext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/nextpage" element={<Authentication values={values} />} />
        <Route path="/products" element={<Collection />} exact />
        <Route path="/products/:id" element={<Productdetails />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
    </>
  );
};
