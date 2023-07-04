/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../item/itemStyle.css";

function ItemDetail({ img, nombre, Precio, stock, id,descripcion }) {
  return (
    <div className="card-2">
      <img  className="card-im-2" src={img} alt={nombre} />
      <div>
      <h2 >Nombre: {nombre}</h2>
      <h3>Precio: {Precio}</h3>
      <h3>ID: {id}</h3>
      <p className="card2">Descripcion:{descripcion}</p>
      <p>Stock:{stock}s</p>
      </div>
     
    </div>
  );
}

export default ItemDetail;
