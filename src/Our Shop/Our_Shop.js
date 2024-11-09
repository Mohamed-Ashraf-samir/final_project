import Our_ShopMain from "./Our_ShopMain"
import Our_ShopSection from "./Our_ShopSection"
import AllFooter from "../Home/AllFooter"
import Navhome from "../Navhome"
import { CartProvider } from "react-use-cart"

function Our_Shop() {
  return (
    <CartProvider>
        <Navhome/>
        <Our_ShopMain/>
        <Our_ShopSection/>
        <AllFooter/>
    </CartProvider>
  )
}

export default Our_Shop