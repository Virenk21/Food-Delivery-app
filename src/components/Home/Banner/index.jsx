import React from 'react';
import './style.css';
import bannerImg from './banner.png';
import Logo from '../../Common/Logo';


const Banner = () => {
  return (
   <header>
<div className='header-content'>
  <Logo />
  <div className="content-main">
    <h1>Delicious food for your cravings</h1>
    <p>We made fresh and healty meals with different receipes</p>
    <button>View Menu<i className='fas fa-long-arrow-alt-right' ></i>
    </button>
    <button>View Menu<i className='fas fa-long-arrow-alt-right' ></i>
    </button>
      </div>

</div>
<img src={bannerImg} alt="banner" className='header-logo' />'

   </header>
  )
}

export default Banner