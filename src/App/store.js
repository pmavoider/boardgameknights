import {configureStore} from "@reduxjs/toolkit"
import {inventorySliceReducer} from "../inventory/InventorySlice"
import { shoppingCartReducer } from "../components/shoppingCart/ShoppingCartSlice"
import { strategySliceReducer } from "../inventory/StategyInventory"
import { diceGameInventorySliceReducer } from "../inventory/DiceGameInventory"
import { partyGameInventorySliceReducer } from "../inventory/PartyGameInventory"
import { OfficialGameInventorySliceReducer } from "../inventory/OfficialInventory"




export default configureStore({
    reducer:{
        inventory : inventorySliceReducer,
        shoppingCart: shoppingCartReducer,
        strategy: strategySliceReducer,
        diceGames: diceGameInventorySliceReducer,
        partyGames : partyGameInventorySliceReducer,
        officialGames: OfficialGameInventorySliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})