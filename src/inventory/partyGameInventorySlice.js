import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   partyGame:{
     
   }
}


export const partyGameInventorySlice = createSlice({
    name: "partyGame",
    cart: {

    },
    initialState,
    reducers: {
            setPartyGameInventory (state, action)  {
                
                return {
                    ...state,
                    ...action.payload
                }
            }
        
    }

})
export const { setPartyGameInventory } = partyGameInventorySlice.actions

export const partyGameSliceReducer = partyGameInventorySlice.reducer