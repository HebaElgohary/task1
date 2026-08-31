import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  password: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

const storedUser = localStorage.getItem("user");
const initialState:AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: !!storedUser,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },


    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;