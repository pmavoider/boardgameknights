import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   diceGame:{
     
   }
}


export const diceGameInventorySlice = createSlice({
    name: "diceGame",
    initialState,
    reducers: {
            setDiceGameInventory (state, action) {
                 state.diceGame = action.payload
                }
        
    }

})
export const { setDiceGameInventory} = diceGameInventorySlice.actions

export const diceGameInventorySliceReducer = diceGameInventorySlice.reducer