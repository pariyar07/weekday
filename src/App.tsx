import { useState, useEffect } from 'react';
import JobFilters from './components/Filters';
import JobCard from './components/JobCard';
// import { useJobsQuery } from './redux/api/jobsApi';
import { getSampleJdJSON } from './utils/sampleJobsData.js';

function App() {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // const { data, isError, isLoading, isSuccess } = useJobsQuery('');
  // console.log(data?.files['Sample JD Data']?.content);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getSampleJdJSON();
      setJobs(data);
      setVisibleJobs(data.slice(0, 12));
    };
    fetchJobs();
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      jobs.length > visibleJobs.length &&
      !isLoadingMore
    ) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setVisibleJobs((prevVisibleJobs) => [
          ...prevVisibleJobs,
          ...jobs.slice(prevVisibleJobs.length, prevVisibleJobs.length + 12),
        ]);
        setIsLoadingMore(false);
      }, 3000);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [jobs, visibleJobs]);

  return (
    <main className="main_container">
      <JobFilters />
      <div className="jobs_list_container">
        {visibleJobs.map((job) => (
          <JobCard key={job?.jdUid} job={job} />
        ))}
        {isLoadingMore && <div className="load_more_text">Loading more...</div>}
      </div>
    </main>
  );
}

export default App;
