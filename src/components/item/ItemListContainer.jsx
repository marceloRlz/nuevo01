/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react"; /* eslint-disable no-unused-vars */
import "./ItemListContainerStyle.css";
import { getProductos, getProductosPorCategorias } from "../../asyncmock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(() => {
       const funcion = idCategoria ? getProductosPorCategorias : getProductos
       funcion(idCategoria)
       .then(res => setProductos(res))   
  }, [idCategoria]);


  return (
    <>
      <h2 className="saludo"> {props.greeting}</h2>
      <ItemList productos={productos} />
    </>
  );
}

export default ItemListContainer;
