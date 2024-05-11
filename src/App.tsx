import JobFilters from './components/Filters';
import JobCard from './components/JobCard';
// import { useJobsQuery } from './redux/api/jobsApi';

function App() {
  // const { data, isError, isLoading, isSuccess } = useJobsQuery('');
  // console.log(data?.files['Sample JD Data']?.content);

  return (
    <main className="main_container">
      <JobFilters />
      <JobCard />
    </main>
  );
}

export default App;
