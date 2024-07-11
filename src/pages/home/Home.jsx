import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import News from './News'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Products/>
      <Collections/>
      <BestSellers/>
      <News/>
    </div>
  )
}

export default Home
