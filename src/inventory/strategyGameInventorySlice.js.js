import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   stategy:{
     
   }
}


export const strategyInventorySlice = createSlice({
    name: "strategy",
    cart: {

    },
    initialState,
    reducers: {
            setStategyInventory (state, action)  {
                console.log(action.payload)
                return {
                    ...state,
                    classic: action.payload
                }
            }
        
  

    }

})
export const { setStrategyInventory } = strategyInventorySlice.actions

export const strategyGameSliceReducer = strategyInventorySlice.reducer