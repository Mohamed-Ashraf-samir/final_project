import React from 'react'
import AllFooter from "../Home/AllFooter"
import Product_detailsMain from './Product_detailsMain'
import Product_detailsSection2 from './Product_detailsSection2'
import Product_detailsSection from './Product_detailsSection'
import Product_detailsInfo from './Product_detailsInfo'
import Navhome from '../Navhome'
import { CartProvider } from 'react-use-cart'


function Product_details() {
  return (
    <CartProvider>
      <Navhome/>
      <Product_detailsMain/>
      <Product_detailsSection/>
      <Product_detailsInfo/>
      <Product_detailsSection2/>
      <AllFooter/>
    </CartProvider>
  )
}

export default Product_details