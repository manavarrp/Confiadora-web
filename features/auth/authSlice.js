import authService from "./authServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let authDetails = undefined;

if (typeof window !== "undefined") {
  authDetails = JSON.parse(localStorage.getItem("authDetails"));
}

const initialState = {
  authDetails: authDetails ?? null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  twoFactor: false,
  isFirstLogin:true,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
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

// export const curpCalculation = createAsyncThunk(
//   "auth/curpCalculation",
//   async ({ userData, callback }, thunkAPI) => {
//     try {
//       return await authService.curpCalculation(userData, callback);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isError = false),
        (state.twoFactor = false),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.message = "");
    },
    resetAuthDetails: (state) => {
      state.authDetails = null;
    },
    setAuthDetails: (state, action) => {
      state.authDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authDetails = action.payload;
        toast.success("Bienvenido");
       /*  if (action.payload.includes("New browser")) {
          state.twoFactor = true;
        } */
      })
      .addCase(login.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.message = action.payload);
        state.authDetails = null;
        toast.error(action.payload);
      })
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        toast.success("Registro con exito!");
        console.log(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // Curp Calculation
      // .addCase(curpCalculation.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(curpCalculation.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.isLoggedIn = true;
      //   state.message = action.payload;
      //   state.firstName = action.payload;
      //   state.secondName = action.payload;
      //   console.log(action.payload);
      // })
      // .addCase(curpCalculation.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      //   state.user = null;
      //   toast.error(action.payload);
      // })
      //logout
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});

export const { reset, resetAuthDetails, setAuthDetails } = authSlice.actions;
export default authSlice.reducer;