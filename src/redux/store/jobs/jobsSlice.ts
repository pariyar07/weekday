import { createSlice } from '@reduxjs/toolkit';

const initialState: JobsState[] = [];

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
});

export default jobsSlice.reducer;
