import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobs/jobsSlice';
import { getJobsApi } from '../api/jobsApi';

export const store = configureStore({
  reducer: { jobs: jobsReducer, [getJobsApi.reducerPath]: getJobsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getJobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
