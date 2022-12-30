import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboardSlice'
export default configureStore({
    reducer: {
        dashboard: dashboardReducer
    }
  })