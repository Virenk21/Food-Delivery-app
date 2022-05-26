import React from 'react'
import EmptyCart from '../../components/Cart/EmptyCart'
import Footer from '../../components/Common/Footer'
import Logo from '../../components/Common/Logo'
import Menu from '../../components/Common/Menu'
import { menuItemsData } from '../../components/Common/Menu/data'

const Cart = () => {
  return (
     <>
     <Logo />
     
    <EmptyCart />
 
     <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'></div>
          <Menu list={menuItemsData} />
          </div>
          <h3 className='orders-total'>Your Total ₹{35}</h3>
           <Footer />
        </>  
   )
}

export default Cart