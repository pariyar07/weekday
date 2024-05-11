declare global {
  type JobsState = {
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
  };

  type JobsInitialState = {
    minExperience: string;
    minBasePay: string;
    jobRole: string[];
    techStack: string[];
    location: string[];
    workCulture: string[];
    companyName: string;
  };
}

export { JobsState, JobsInitialState };
