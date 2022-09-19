import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let tempArray = [];
export const fetchDiceGameInventory = createAsyncThunk(
  "diceGames/fetchDiceGames",
  async () => {
    const response = await fetch(
      "https://api.boardgameatlas.com/api/search?list_id=OTvhL1Ydc6&client_id=4HT2KbcdyO"
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

export const diceGameInventorySlice = createSlice({
  name: "diceGames",
  initialState: { isLoading: true, errMess: null, diceGamesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchDiceGameInventory.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDiceGameInventory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.diceGameArray = action.payload;
    },
    [fetchDiceGameInventory.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "fetch failed";
    },
  },
});

export const diceGameInventorySliceReducer = diceGameInventorySlice.reducer;
