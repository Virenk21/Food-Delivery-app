import React from 'react';
import { menuItemsData } from './data';
import MenuItem from './MenuItems';
import './style.css';
const Menu = () => {
  return (
   <main>
    {menuItemsData.map((item) => (
      <MenuItem item={item} />
    ))}

   </main>
  )
}

export default Menu