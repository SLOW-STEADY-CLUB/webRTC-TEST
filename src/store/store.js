import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import dashboard from './reducers/dashboardSlice';
import call from './reducers/callSlice';
export default configureStore({
    reducer: {
        dashboard,
        call,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
  })