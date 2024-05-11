import { useState, useEffect } from 'react';
import JobFilters from './components/Filters';
import JobCard from './components/JobCard';
// import { useJobsQuery } from './redux/api/jobsApi';
import { getSampleJdJSON } from './utils/sampleJobsData.js';
import { useSelector } from 'react-redux';
import NoData from '../public/no_data.svg';

function App() {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // const { data, isError, isLoading, isSuccess } = useJobsQuery('');
  // const sampleJD = data?.files['Sample JD Data']?.content;

  const {
    minExperience,
    minBasePay,
    jobRole,
    // techStack,
    location,
    workCulture,
    companyName,
  } = useSelector((state) => (state as { jobs: JobsInitialState }).jobs);

  const filterJobs = () => {
    return getSampleJdJSON().filter((job) => {
      // Check if minExperience matches
      if (
        minExperience &&
        (job.minExp === null || job.minExp < parseInt(minExperience))
      ) {
        return false;
      }

      // Check if minBasePay matches
      if (
        minBasePay &&
        (job.minJdSalary === null || job.minJdSalary < parseInt(minBasePay))
      ) {
        return false;
      }

      // Check if jobRole matches
      if (jobRole && jobRole.length && !jobRole.includes(job.jobRole)) {
        return false;
      }

      // Check if techStack matches
      // if (
      //   techStack &&
      //   techStack.length &&
      //   !job.jobDetailsFromCompany.toLowerCase().includes(techStack.join(' '))
      // ) {
      //   return false;
      // }

      // Check if location matches
      if (
        location &&
        location.length &&
        !location.includes(job.location.toLowerCase().replace(' ', '_'))
      ) {
        return false;
      }

      // Check if workCulture matches
      if (
        workCulture &&
        workCulture.length &&
        !workCulture.includes(job.location.toLowerCase())
      ) {
        return false;
      }

      // Check if companyName matches
      if (
        companyName &&
        !job.companyName.toLowerCase().includes(companyName.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredJobs = filterJobs();

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await filteredJobs;
      setJobs(data);
      setVisibleJobs(data.slice(0, 12));
    };
    fetchJobs();
  }, [filteredJobs?.length]);

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
      <>
        {jobs?.length ? (
          <div className="jobs_list_container">
            {visibleJobs.map((job) => (
              <JobCard key={job?.jdUid} job={job} />
            ))}
            {isLoadingMore && (
              <div className="load_more_text">Loading more...</div>
            )}
          </div>
        ) : (
          <div className="no_jobs_container">
            <p className="no_jobs_text">No Jobs Found!</p>
            <img src={NoData} width={360} height={360} alt="NoData" />
          </div>
        )}
      </>
    </main>
  );
}

export default App;
