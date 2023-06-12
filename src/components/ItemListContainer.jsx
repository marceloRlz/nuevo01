/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ItemListContainerStyle.css'

function ItemListContainer(props) {
  return (
    <h2 className='saludo'> {props.greeting}</h2>
  )
}

export default ItemListContainer
