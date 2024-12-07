import { configureStore } from '@reduxjs/toolkit';
import { postApi } from './features/api/postApi';
import { userApi } from './features/api/usersApi';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware,userApi.middleware),
});

export default store;


