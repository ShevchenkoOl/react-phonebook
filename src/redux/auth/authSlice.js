// import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './authOperations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.register.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [authOperations.logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logIn.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [authOperations.logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.fetchCurrentUser.pending](state) {
//       state.IsFetchingCurrentUser = true;
//     },
//     [authOperations.fetchCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.IsFetchingCurrentUser = false;
//     },
//     [authOperations.fetchCurrentUser.rejected](state) {
//       state.IsFetchingCurrentUser = false;
//       state.error = state.payload;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
