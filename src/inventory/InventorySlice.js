import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let tempArray = [];
export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async () => {
    const response = await fetch(
      "https://api.boardgameatlas.com/api/search?list_id=lRL8hqWoID&client_id=4HT2KbcdyO"
    );
    const data = await response.json();
    data.games.map((x) => {
      tempArray.push({
        name: x.name,
        description: x.description_preview,
        price: x.price === 0 ? 9.99 : x.price,
        image: x.image_url,
        invenotryCount: 6,
      });
    });
    return tempArray;
  }
);

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: { isLoading: true, errMess: null, inventoryArray: [] },
  reducers: {},
  extraReducers: {
    [fetchInventory.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchInventory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.inventoryArray = action.payload;
    },
    [fetchInventory.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "fetch failed";
    },
  },
});

export const inventorySliceReducer = inventorySlice.reducer;
