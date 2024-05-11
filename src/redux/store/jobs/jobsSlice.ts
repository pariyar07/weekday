import { createSlice } from '@reduxjs/toolkit';

const initialState: JobsInitialState = {
  minExperience: '',
  minBasePay: '',
  jobRole: [],
  techStack: [],
  location: [],
  workCulture: [],
  companyName: '',
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setMinExperience: (state, action) => {
      state.minExperience = action.payload?.value;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload?.value;
    },
    setRole: (state, action) => {
      state.jobRole = action.payload?.map((jobRole) => jobRole?.value);
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload?.map((techStack) => techStack?.value);
    },
    setLocation: (state, action) => {
      state.location = action.payload?.map((location) => location?.value);
    },
    setWorkCulture: (state, action) => {
      state.workCulture = action.payload?.map((culture) => culture?.value);
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setMinExperience,
  setMinBasePay,
  setRole,
  setTechStack,
  setLocation,
  setWorkCulture,
  setCompanyName,
  resetFilters,
} = jobsSlice.actions;

export default jobsSlice.reducer;
