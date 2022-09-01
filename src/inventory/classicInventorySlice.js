import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let tempArray = []
export const fetchInventory = createAsyncThunk(
    'inventory/fetchInventory',
    async () => {
        const response = await fetch("https://api.boardgameatlas.com/api/search?list_id=OTvhL1Ydc6&client_id=4HT2KbcdyO");
        let data = response.json();
        data.games.map((x) => {
       
            tempArray.push({
              name: x.name,
              description: x.description_preview,
              price: x.price,
              image: x.image_url,
              invenotryCount: 6
            })
          })
          console.log(tempArray)
        return tempArray;
    }
);

export const inventorySlice = createSlice({
    name: "inventory",
    initialState:{ isLoading: true, errMess: null, inventoryArray: [] },
    reducers: {
        setClassicInventory  (state, action)  {
            return{
                classic:   action.payload
            } },
    extraReducers:{
        [fetchInventory.pending]: (state) => {
            state.isLoading = true
        },
        [fetchInventory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.inventoryArray = action.payload;

        },
        [fetchInventory.rejected]: (state, action) =>{
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : "fetch failed"
        }
    }
           
                
           
        }
    }

)
export const {setInventory } = inventorySlice.actions

export const inventorySliceReducer = inventorySlice.reducer