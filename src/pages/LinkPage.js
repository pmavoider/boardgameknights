import Header from "../components/Header"
import Footer from "../components/Footer"
import HomePage from "./HomePage"
import Products from "./Products"
import ProductBreakout from '../components/ProductBreakout';
import {Router, Route, Routes} from "react-router-dom"
import ShoppingCart from "./ShoppingCart"
import {useSelector} from "react-redux"
import ScrollToTop from "../components/ScrollToTop";
import AboutUs from "./AboutUs";
import OrderConfirmation from "./OrderConfirmation"


const LinkPage = () => {
    return (<>
    
        <Header />
        
    
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
       </> )
}
export default LinkPage; 