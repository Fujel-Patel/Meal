import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRestaurants: [],
  filteredRestaurants: [],
  filter: "all",
  searchTerm: "",
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.allRestaurants = action.payload;
      state.filteredRestaurants = action.payload;
      state.filter = "all";
      state.searchTerm = "";
    },
    filterTopRated: (state) => {
      state.filter = "topRated";
      state.filteredRestaurants = state.allRestaurants.filter(
        (res) => res.avgRating > 4
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      if (state.filter === "all") {
        state.filteredRestaurants = state.allRestaurants;
      } else if (state.filter === "topRated") {
        state.filteredRestaurants = state.allRestaurants.filter(
          (res) => res.avgRating > 4
        );
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      if (state.searchTerm === "") {
        // If search term is empty, apply current filter
        if (state.filter === "all") {
          state.filteredRestaurants = state.allRestaurants;
        } else if (state.filter === "topRated") {
          state.filteredRestaurants = state.allRestaurants.filter(
            (res) => res.avgRating > 4
          );
        }
      } else {
        // Filter by search term and current filter
        let filtered = state.allRestaurants;
        if (state.filter === "topRated") {
          filtered = filtered.filter((res) => res.avgRating > 4);
        }
        state.filteredRestaurants = filtered.filter((res) =>
          res.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
    },
  },
});

export const { setRestaurants, filterTopRated, setFilter, setSearchTerm } = restaurantSlice.actions;
export default restaurantSlice.reducer;