import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let tempArray = [];
export const fetchOfficialInventory = createAsyncThunk(
  "officialGames/fetchOfficialGames",
  async () => {
    const response = await fetch(
      "https://api.boardgameatlas.com/api/search?list_id=nWoKO0QfCA&client_id=4HT2KbcdyO"
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

export const officialGamesInventorySlice = createSlice({
  name: "OfficialGames",
  initialState: { isLoading: true, errMess: null, officialGamesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchOfficialInventory.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOfficialInventory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.officialGamesArray = action.payload;
    },
    [fetchOfficialInventory.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "fetch failed";
    },
  },
});

export const OfficialGameInventorySliceReducer =
  officialGamesInventorySlice.reducer;
