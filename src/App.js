
import './App.css';
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import HomePage from "../src/pages/HomePage"
import Catagories from "./components/Catagories"
import fetcher from "./assets/inventory"
import Products from "./pages/Products"
fetcher()
function App() {

  return (<>
    <Header />
    <HomePage />
    <Catagories />
    <Footer/>
    </>
  );
}

export default App;
