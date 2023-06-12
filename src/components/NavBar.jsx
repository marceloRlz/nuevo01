/* eslint-disable no-unused-vars */


import React from 'react'
import './NavBarStyle.css'
import CardWidget from './CardWidget'




export default function NavBar() {
  return (
   
 <> 

<div className="header" >


<h1 className='Title'>Retro Consolas </h1>
<CardWidget/>
<h2 className='mario'>asdfghjkp</h2>
<ul className="a"></ul>
<ul className="b"></ul>
<ul className="a-Up2"></ul>
<ul className="b-Up2"></ul>
<button className='a-Up'></button>
<p className='aUpLet'>inicio</p>
<button className='b-Up'></button>
<p className='bUpLet'>Contacto</p>
<button className='aCircle'></button>
<p className='aLet'>Juegos</p>
<button className='bCircle'></button>
<p className='bLet'>Consolas</p>
<ul className="buttons-left"></ul>
</div>
</> 
  )
}
