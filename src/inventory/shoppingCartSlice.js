import {createSlice} from "@reduxjs/toolkit"

const initialState = {
        cart: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{}
})

export const cartReducer = cartSlice.reducer

export const {/*reducers */} = cartSlice.actions
