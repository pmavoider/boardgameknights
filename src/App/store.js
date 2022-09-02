import {configureStore} from "@reduxjs/toolkit"
import {inventorySliceReducer} from "../inventory/InventorySlice"
import { shoppingCartReducer } from "../components/shoppingCart/ShoppingCartSlice"






export default configureStore({
    reducer:{
        inventory : inventorySliceReducer,
        shoppingCart: shoppingCartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})