

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';








function Navhome() {
   const {totalItems} = useCart()
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div class="nav-home">
    <div>
      <Link className='float-left' to='/'>
        <img class="child_newNav float-left" src="assets/img/logo.png"/>
        </Link>
    </div>

    <div class="float-right">
        <Link class="text-nav text-decoration-none arvo-bold-italic" to="/">Home</Link>
        <Link class="text-nav text-decoration-none arvo-regular-italic" to="/Our_Shop">Events</Link>
        <Link class="text-nav text-decoration-none arvo-regular-italic" to="/product-details">Details</Link>
        <Link class="text-nav text-decoration-none arvo-regular-italic" to="/Shopping">Shoping</Link>
        <Link class="text-nav text-decoration-none arvo-regular-itali" to="/contact">Contact</Link>
        <Link class="text-nav text-decoration-none arvo-bold" to="/Login">Login</Link>
        <Link class="text-nav text-decoration-none arvo-bold" to="/Cart"><i class="fa-solid fa-cart-arrow-down"></i></Link><span className='text-danger cart-edit'>({totalItems})</span> 
    </div>
    

    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            
            <NavItem>
              <Link className='solve' to="/">Home</Link>
            </NavItem>

            <NavItem>
              <Link className='solve' to="/Our_Shop">
                Events
              </Link>
            </NavItem>

            <NavItem>
              <Link className='solve' to="/product-details">
                Details
              </Link>
            </NavItem>


            <NavItem>
              <Link className='solve' to="/Shopping">
                shopping
              </Link>
            </NavItem>

            <NavItem>
              <Link className='solve' to="/contact">
                Contact
              </Link>
            </NavItem>

            <NavItem>
              <Link className='solve' to="/Login">
                Login
              </Link>
            </NavItem>


          </Nav>
        </Collapse>
      </Navbar>
              <Link className='Cart_phone' to="/Cart">
              <i className="fa-solid fa-cart-arrow-down"></i>
              </Link><span className='num_phone'>({totalItems})</span>
    </div>

</div>
  )
}

export default Navhome;