import React from 'react'
import CartCountButton from '../../components/Common/CartCountButton'
import Footer from '../../components/Common/Footer'
import Menu from '../../components/Common/Menu'
import Banner from '../../components/Home/Banner'


const Homepage = () => {
  return (
    <div>
<Banner/>
<Menu />
<Footer />
<CartCountButton />

    </div>
  )
}

export default Homepage