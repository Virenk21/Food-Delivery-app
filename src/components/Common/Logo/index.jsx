import React from 'react'
import './style.css';
import logoImg from './logofdapp.png'

const Logo = () => {
  return (
    <div className='header-content_logo'>
        <div>
          <img src={logoImg} alt="logo" />
          <span>
        <b>Taste</b>
        </span>
         <p>
      <b>Restaurant & BBQ</b>
    </p>
        </div>
    </div>
  )
}

export default Logo