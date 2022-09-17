import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import HomePage from "../src/pages/HomePage"
import Products from "./pages/Products"
import ProductBreakout from './components/ProductBreakout';
import {Router, Route, Routes} from "react-router-dom"
import ShoppingCart from "./pages/ShoppingCart"

function App() {
  

  return (<>
    
    <Header />
   
    <Routes>
    <Route path="/" element={<HomePage  />} />
    <Route path="products" element={<Products /> } />
    <Route path="products/:category" element={<Products />}  />
    <Route path="products/classic/productspage/:name" element={<ProductBreakout />} />
    <Route path="products/diceGames/productspage/:name" element={<ProductBreakout />} />
    <Route path="products/strategy/productsPage/:name" element={<ProductBreakout />} />
    <Route path="shoppingCart" element={<ShoppingCart />} />
    </Routes>

    <Footer/>
   </> 
  );
}

export default App;
