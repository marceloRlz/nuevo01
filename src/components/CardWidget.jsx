/* eslint-disable no-unused-vars */
import React from 'react'
import './CardWidgetstyle.css'
import Cart from './img/cartRed.png'





export default function CardWidget() {
 
  return (
    
    <div>
      <img className='carrito' src={Cart} alt='carrito'/>
      <strong className='stock'>7</strong>
    </div>
  )
}
