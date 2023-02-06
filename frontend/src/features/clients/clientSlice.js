import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  client: null,
  clients: [],
  clientOptions: [],
  isLoading: false,
  isSuccess: false,
};

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const createClient = createAsyncThunk('clients/create', async (data) => {
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  const response = await fetch(
    `http://127.0.0.1:5001/api/clients`,
    requestOptions,
  );
  return await response.json();
});

export const getClients = createAsyncThunk('clients/get', async (data) => {
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const response = await fetch(
    `http://127.0.0.1:5001/api/clients`,
    requestOptions,
  );
  return await response.json();
});

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: {
    [createClient.pending]: (state) => {
      state.isLoading = true;
    },
    [createClient.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.client = action.payload;
    },
    [createClient.rejected]: (state) => {
      state.isLoading = false;
    },
    [getClients.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.clients = [];
    },
    [getClients.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isSuccess = true;
      state.clients = action.payload;
      state.clientOptions = state.clients.map((element) => {
        return { value: element._id, label: element.name };
      });
    },
    [getClients.rejected]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
});

export default clientSlice.reducer;
