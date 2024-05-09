import { Box, Card } from '@mui/material';
import styles from './job-card.module.css';
import CustomButton from '../ui/CustomButton';
import { AVATAR_EXAMPLE_ARRAY } from '../../constants';
import AboutUs from './AboutUs';

const JobCard = () => {
  return (
    <Card className={styles.main_card_container}>
      {/* Card Top Section */}
      <div className={styles.card_top_section}>
        {/* Job posting Timestamp */}
        <Box className={styles.posting_timestamp}>⏳ Posted 22 days ago</Box>
        {/* Company Info */}
        <div className={styles.company_info_container}>
          <img
            src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713271734116_1ci60.png"
            width={48}
            height={48}
            alt="Weekday"
          />
          <div className={styles.company_text_info_container}>
            <h3 className={styles.company_name}>Weekday</h3>
            <h2 className={styles.company_job_position}>
              React/Next Developer
            </h2>
            <p className={styles.company_location}>Bengaluru</p>
          </div>
        </div>
        {/* Salary */}
        <p className={styles.salary}>Estimated Salary: ₹10 - 14 LPA ✅</p>
        {/* About Us */}
        <AboutUs />
      </div>
      {/* Card Bottom Section */}
      <div className={styles.card_bottom_section}>
        {/* Experience */}
        <div className={styles.experience_container}>
          <h3 className={styles.experience_header_text}>Minimum Experience</h3>{' '}
          <h2 className={styles.experience_required_text}>1 years</h2>
        </div>
        <CustomButton type="primary" text="⚡️ Easy Apply" />
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
