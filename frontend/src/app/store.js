import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clientReducer from '../features/clients/clientSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    client: clientReducer,
  },
});
