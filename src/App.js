
import LinkPage from "./pages/LinkPage"
import Importer from "../src/components/Importer"
import {useSelector} from "react-redux"


const App = () => {
  const state = useSelector((state) => state.shoppingCart)
  console.log(state.cart.length)
 
  return (<>
      <Importer />
    <LinkPage />
    </>
  )
  }


export default App;
