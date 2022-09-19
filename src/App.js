import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import HomePage from "../src/pages/HomePage"
import Products from "./pages/Products"
import ProductBreakout from './components/ProductBreakout';
import {Router, Route, Routes} from "react-router-dom"
import ShoppingCart from "./pages/ShoppingCart"
import Importer from "../src/components/Importer"
import {useSelector} from "react-redux"
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import OrderConfirmation from "./pages/OrderConfirmation"

function App() {
 
  return (<>
    
    <Header />
    <Importer />

     <ScrollToTop>
    <Routes>
    <Route path="/" element={<HomePage  />} />
    <Route path="products" element={<Products /> } />
    <Route path="products/:category" element={<Products />}  />
    <Route path="products/classic/productspage/:name" element={<ProductBreakout cat="classic"/>} />
    <Route path="products/diceGames/productsPage/:name" element={<ProductBreakout cat ="diceGames"/>} />
    <Route path="products/strategy/productsPage/:name" element={<ProductBreakout cat="strategy" />}  />
    <Route path="products/partyGames/productsPage/:name" element={<ProductBreakout cat="partyGames" />}  />
    <Route path="products/official/productsPage/:name" element={<ProductBreakout cat="officialGames" />}  />
    <Route path="shoppingCart" element={<ShoppingCart />} />
    <Route path="aboutus" element={<AboutUs /> } />
    <Route path="shoppingCart/order" element={<OrderConfirmation /> } />
    </Routes>
    </ScrollToTop>
    

    <Footer/>
   </> 
  );
} 

export default App;
