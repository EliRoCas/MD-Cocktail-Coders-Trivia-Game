import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktailsByCategory = createAsyncThunk(
  "cocktail/fetchCocktailsByCategory",
  async (category, { getState }) => {
    // Check cache first
    const existing = getState().cocktail.cocktails[category];
    if (existing) return { category, drinks: existing };

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    return { category, drinks: data.drinks?.slice(0, 6) || [] };
  }
);

export const fetchCocktailDetails = createAsyncThunk(
  "cocktail/fetchCocktailDetails",
  async (id, { getState }) => {
    // Check cache first
    const existing = getState().cocktail.cocktailDetails;
    if (existing?.idDrink === id) return existing;

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.drinks?.[0] || null;
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktails: {},
    cocktailDetails: {},
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktailsByCategory.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCocktailsByCategory.fulfilled, (state, action) => {
        state.loading = "succeeded";
        if (action.payload.drinks.length > 0) {
          state.cocktails[action.payload.category] = action.payload.drinks;
        }
      })
      .addCase(fetchCocktailsByCategory.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCocktailDetails.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCocktailDetails.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.cocktailDetails = action.payload;
      })
      .addCase(fetchCocktailDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default cocktailSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Acción para llamar a la API y obtener los cócteles por categoría
// export const fetchCocktailsByCategory = createAsyncThunk(
//   "cocktail/fetchCocktailsByCategory",
//   async (category) => {
//     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
//     const data = await response.json();
//     return { category, drinks: data.drinks.slice(0, 6) };
//   }
// );

// // Acción para llamar a la API y obtener detalles del cóctel por ID
// export const fetchCocktailDetails = createAsyncThunk(
//   "cocktail/fetchCocktailDetails",
//   async (id) => {
//     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//     const data = await response.json();
//     return data.drinks[0];
//   }
// );

// const cocktailSlice = createSlice({
//   name: "cocktail",
//   initialState: {
//     cocktails: {},
//     cocktailDetails: {},
//     loading: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCocktailsByCategory.pending, (state) => {
//         state.loading = "loading";
//       })
//       .addCase(fetchCocktailsByCategory.fulfilled, (state, action) => {
//         state.loading = "succeeded";
//         state.cocktails[action.payload.category] = action.payload.drinks;
//       })
//       .addCase(fetchCocktailsByCategory.rejected, (state, action) => {
//         state.loading = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(fetchCocktailDetails.pending, (state) => {
//         state.loading = "loading";
//       })
//       .addCase(fetchCocktailDetails.fulfilled, (state, action) => {
//         state.loading = "succeeded";
//         state.cocktailDetails = action.payload;
//       })
//       .addCase(fetchCocktailDetails.rejected, (state, action) => {
//         state.loading = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default cocktailSlice.reducer;
