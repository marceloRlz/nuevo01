/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();
  useEffect(() => {
    getUnProducto(idItem).then((res) => setProducto(res));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
}

export default ItemDetailContainer;
