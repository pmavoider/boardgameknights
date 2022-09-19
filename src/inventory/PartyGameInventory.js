import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let tempArray = [];
export const fetchPartyGameInventory = createAsyncThunk(
  "partyGames/fetchPartyGames",
  async () => {
    const response = await fetch(
      "https://api.boardgameatlas.com/api/search?list_id=mQcOJL1oUA&client_id=4HT2KbcdyO"
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

export const partyGamesInventorySlice = createSlice({
  name: "partyGames",
  initialState: { isLoading: true, errMess: null, partyGamesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchPartyGameInventory.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPartyGameInventory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.partyGamesArray = action.payload;
    },
    [fetchPartyGameInventory.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "fetch failed";
    },
  },
});

export const partyGameInventorySliceReducer = partyGamesInventorySlice.reducer;
