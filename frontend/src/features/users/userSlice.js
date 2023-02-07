import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const userLogin = createAsyncThunk('user/login', async (data) => {
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  console.log('userLogin', JSON.stringify(data));

  const response = await fetch(
    `http://127.0.0.1:5001/api/users/login`,
    requestOptions,
  );
  return await response.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      const value = window.localStorage.getItem('user');
      if (value) {
        state.user = value;
        return JSON.parse(value);
      } else {
        window.localStorage.setItem('user', JSON.stringify(null));
        return null;
      }
    },
    logout: (state) => {
      state.user = null;
      window.localStorage.setItem('user', JSON.stringify(null));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      window.localStorage.setItem('user', JSON.stringify(payload));
    });
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });

    builder.addCase(userLogin.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
export const { logout, getUser } = userSlice.actions;
