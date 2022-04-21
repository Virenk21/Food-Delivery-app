import React from 'react'
import './style.css'
import emptyCartImg from './emptycrt.png'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
    const navigate = useNavigate();
  return (
      <div className='emptyCart'>
    <img src={emptyCartImg} alt="empty" />
    <button onClick={() => navigate('/')}>
     <i className='fas fa-long-arrow-alt-left'></i> Shop now
    </button>
    </div>
  )
}

export default EmptyCart