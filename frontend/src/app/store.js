import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clientReducer from '../features/clients/clientSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    client: clientReducer,
    user: userReducer,
  },
});
