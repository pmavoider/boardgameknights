
import './App.css';
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import HomePage from "../src/pages/HomePage"
import Catagories from "./components/Catagories"

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
