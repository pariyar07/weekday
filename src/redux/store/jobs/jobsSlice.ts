import { createSlice } from '@reduxjs/toolkit';

interface JobsState {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

const initialState: JobsState[] = [];

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
});

export default jobsSlice.reducer;
