import JobFilters from './components/Filters';
import JobCard from './components/JobCard';
// import { useJobsQuery } from './redux/api/jobsApi';
import NoData from '../public/no_data.svg';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import JobsList from './components/JobsList';

function App() {
  // const { data, isError, isLoading, isSuccess } = useJobsQuery('');
  // const sampleJD = data?.files['Sample JD Data']?.content;

  return (
    <main className="main_container">
      <JobFilters />
      <JobsList>
        {({ jobs, visibleJobs, isLoadingMore }) => (
          <>
            {jobs?.length ? (
              <>
                <div className="jobs_list_container">
                  {visibleJobs.map((job) => (
                    <JobCard key={job?.jdUid} job={job} />
                  ))}
                </div>
                {isLoadingMore && (
                  <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                  </Box>
                )}
              </>
            ) : (
              <div className="no_jobs_container">
                <p className="no_jobs_text">No Jobs Found!</p>
                <img src={NoData} width={360} height={360} alt="NoData" />
              </div>
            )}
          </>
        )}
      </JobsList>
    </main>
  );
}

export default App;
