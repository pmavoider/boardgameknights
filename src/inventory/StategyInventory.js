import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let tempArray = [];
export const fetchStrategyInventory = createAsyncThunk(
  "strategy/fetchStrategy",
  async () => {
    const response = await fetch(
      "https://api.boardgameatlas.com/api/search?list_id=jA84FimQj5&client_id=4HT2KbcdyO"
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

export const strategySlice = createSlice({
  name: "strategy",
  initialState: { isLoading: true, errMess: null, strategyArray: [] },
  reducers: {},
  extraReducers: {
    [fetchStrategyInventory.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStrategyInventory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.strategyArray = action.payload;
    },
    [fetchStrategyInventory.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "fetch failed";
    },
  },
});

export const strategySliceReducer = strategySlice.reducer;
