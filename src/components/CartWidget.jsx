/* eslint-disable no-unused-vars */
import React from "react";
import "./CartWidgetstyle.css";
import Cart from "../../public/img/cartRed.png";

export default function CartWidget() {
  return (
    <div>
      <img className="carrito" src={Cart} alt="carrito" />
      <strong className="stock">7</strong>
    </div>
  );
}
