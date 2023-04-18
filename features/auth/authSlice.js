import authService from "./authServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  twoFactor: false,
  message: "",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      return await authService.registerUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthDetails: (state) => {
      state.authDetails = null;
    },
    setAuthDetails: (state, action) => {
      state.authDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        toast.success(
          "Se ha enviado un correo electrónico con las credenciales de ingreso y un enlace de confirmación."
        );
        //console.log(action.payload)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { reset, resetAuthDetails, setAuthDetails } = authSlice.actions;
export default authSlice.reducer;
