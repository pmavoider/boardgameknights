
import './App.css';
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import HomePage from "../src/pages/HomePage"
import fetcher from "./assets/inventory"
import Products from "./pages/Products"
import ProductBreakout from './components/ProductBreakout';
import {Router, Route, Routes} from "react-router-dom"
function App() {

  return (<>
  <body>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage  />} />
    <Route path="products" delement={<Products /> } />
    <Route path="products/:category" element={<Products />}  />
    <Route path="products/classic/productspage/:name" element={<ProductBreakout />} />
    
   
    

    </Routes>
    </body>
    <Footer/>
   </> 
  );
}

export default App;
