import hero from "../images/heroImg.jpg"
import Catagories from "../components/Catagories"
import { useDispatch} from "react-redux"
import { fetchInventory } from "../inventory/classicInventorySlice"
import { useEffect } from "react"



const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInventory());
    }, [dispatch]);

  
    return (<>
        <div className="hero">
            <h3 className="text-white text-center pt-5">Welcome to the World's #1 Online GameStore
            </h3>
            </div>
            <Catagories />
            </>
    )
}

export default HomePage;