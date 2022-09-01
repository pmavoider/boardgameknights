import {configureStore} from "@reduxjs/toolkit"
import {inventorySliceReducer} from "../inventory/InventorySlice"







export default configureStore({
    reducer:{
        inventory : inventorySliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})