import React from 'react';
import { menuItemsData } from './data';
import './style.css';
const Menu = () => {
  return (
   <main>
    {menuItemsData.map((item) => (
      <p>{item.name}</p>
    ))}

   </main>
  )
}

export default Menu