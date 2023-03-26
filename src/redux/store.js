import { configureStore } from '@reduxjs/toolkit';
import { movieCoreApi } from './services/movieDatabase';
 

export const store = configureStore({
  reducer: {
    [movieCoreApi.reducerPath]: movieCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieCoreApi.middleware),
});
