import JobFilters from './components/Filters';
import JobCard from './components/JobCard';
// import { useJobsQuery } from './redux/api/jobsApi';
import { getSampleJdJSON } from './utils/sampleJobsData.js';

function App() {
  // const { data, isError, isLoading, isSuccess } = useJobsQuery('');
  // console.log(data?.files['Sample JD Data']?.content);

  return (
    <main className="main_container">
      <JobFilters />
      <div className="jobs_list_container">
        {getSampleJdJSON().map((job) => (
          <JobCard key={job?.jdUid} job={job} />
        ))}
      </div>
    </main>
  );
}

export default App;
