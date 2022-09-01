import {configureStore, combineReducers} from "@reduxjs/toolkit"
import {inventorySliceReducer} from "../inventory/classicInventorySlice"
import {useStore} from "react-redux"
import {cartReducer} from "../inventory/shoppingCartSlice"





export default configureStore({
    reducer:{
        inventory : inventorySliceReducer,
        /* strategy : strategyGameSliceReducer,
          diceGames: diceGameInventorySliceReducer,
           partyGames: partyGameSliceReducer,
           cart : cartReducer*/
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})