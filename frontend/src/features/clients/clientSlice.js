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

export const getClients = createAsyncThunk(
  'clients/get',
  async (data, thunkAPI) => {
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    try {
      const response = await fetch(
        `http://127.0.0.1:5001/api/clients`,
        requestOptions,
      );
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('Error...');
    }
  },
);

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClient.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.client = payload;
    });
    builder.addCase(createClient.pending, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });

    builder.addCase(createClient.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getClients.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.clients = [];
    });

    builder.addCase(getClients.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.clients = payload;
      state.clientOptions = state.clients.map((element) => {
        return { value: element._id, label: element.name };
      });
    });

    builder.addCase(getClients.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

export default clientSlice.reducer;
