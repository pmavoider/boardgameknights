import { useDispatch} from "react-redux"
import { fetchInventory } from "../inventory/InventorySlice"
import { useEffect } from "react"
import Catagories from "../components/Catagories"
import { fetchStrategyInventory } from "../inventory/StategyInventory"
import { fetchDiceGameInventory } from "../inventory/DiceGameInventory"
import { fetchPartyGameInventory } from "../inventory/PartyGameInventory"
import { fetchOfficialInventory} from "../inventory/OfficialInventory";


const HomePage = () => {
    const dispatch = useDispatch();
      
    useEffect(() => {
            dispatch(fetchInventory())
            dispatch(fetchStrategyInventory())
            dispatch(fetchPartyGameInventory())
            dispatch(fetchDiceGameInventory())
            dispatch(fetchOfficialInventory())
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