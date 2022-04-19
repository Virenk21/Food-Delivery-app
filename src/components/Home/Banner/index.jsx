import React from 'react';
import './style.css';
import bannerImg from './banner.png';

const Banner = () => {
  return (
   <header>
<div className='header-content'></div>
<img src={bannerImg} alt="banner" className='header-logo' />'

   </header>
  )
}

export default Banner