import React from 'react'
import Navhome from '../Navhome'
import AllFooter from '../Home/AllFooter'
import Contentlog from './Contentlog'
import { CartProvider } from 'react-use-cart'

function Login() {
  return (
    <CartProvider>
        <Navhome/>
        <br/>
        <br/>
        <br/>
        <Contentlog/>
        <AllFooter/>
    </CartProvider>
  )
}

export default Login