import { Box, Card } from '@mui/material';
import styles from './job-card.module.css';
import CustomButton from '../ui/CustomButton';
import { AVATAR_EXAMPLE_ARRAY } from '../../constants';
import AboutUs from './AboutUs';

const JobCard = ({ job }: { job: JobsState }) => {
  const {
    jdLink,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = job;

  return (
    <Card className={styles.main_card_container}>
      {/* Card Top Section */}
      <div className={styles.card_top_section}>
        {/* Job posting Timestamp */}
        <Box className={styles.posting_timestamp}>⏳ Posted 22 days ago</Box>
        {/* Company Info */}
        <div className={styles.company_info_container}>
          <img src={logoUrl} width={48} height={48} alt="Weekday" />
          <div className={styles.company_text_info_container}>
            <h3 className={styles.companyName}>{companyName}</h3>
            <h2 className={styles.company_job_position}>{jobRole}</h2>
            <p className={styles.company_location}>{location}</p>
          </div>
        </div>
        {/* Salary */}
        <p className={styles.salary}>
          Estimated Salary:{' '}
          {minJdSalary
            ? `${minJdSalary}k - ${maxJdSalary}k ${salaryCurrencyCode} ✅`
            : `Up to ${maxJdSalary}k ${salaryCurrencyCode} ✅`}
        </p>
        {/* About Us */}
        <AboutUs job={job} />
      </div>
      {/* Card Bottom Section */}
      <div className={styles.card_bottom_section}>
        {/* Experience */}
        <div className={styles.experience_container}>
          <h3 className={styles.experience_header_text}>Experience Required</h3>{' '}
          <h2 className={styles.experience_required_text}>
            {minExp && maxExp
              ? `${minExp} - ${maxExp} years`
              : minExp
              ? `${minExp} years`
              : 'Fresher'}
          </h2>
        </div>
        <CustomButton type="primary" text="⚡️ Easy Apply" link={jdLink} />
        <CustomButton
          type="secondary"
          text="Unlock Referral Ask"
          avatars={AVATAR_EXAMPLE_ARRAY}
        />
      </div>
    </Card>
  );
};

export default JobCard;
