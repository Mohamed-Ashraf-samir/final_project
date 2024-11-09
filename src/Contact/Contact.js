import React from 'react'
import AllFooter from "../Home/AllFooter"
import ContactMain from './ContactMain'
import ContactSection from './ContactSection'
import Navhome from '../Navhome'
import { CartProvider } from 'react-use-cart'

function Contact() {
  return (
    <CartProvider>
      <Navhome/>
      <ContactMain/>
      <ContactSection/>
      <AllFooter/>
    </CartProvider>
  )
}

export default Contact