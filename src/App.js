import AllMain from "./Home/AllMain";
import AllSection from "./Home/AllSection";
import Homepage from "./Home/Homepage";
import AllFooter from "./Home/AllFooter"
import Navhome from "./Navhome";
import { CartProvider } from "react-use-cart";

function App() {
  return (
   <CartProvider>
    <Navhome/>
    <Homepage/>
    <AllMain/>
    <AllSection/>
    <AllFooter/>
   </CartProvider>
  );
}

export default App;
