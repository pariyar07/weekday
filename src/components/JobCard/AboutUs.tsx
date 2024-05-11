import { useState } from 'react';
import CustomButton from '../ui/CustomButton';
import styles from './job-card.module.css';
import { Modal } from '@mui/material';

const AboutUs = ({ job }: { job: JobsState }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const { jobDetailsFromCompany } = job;

  const showDetails = () => setShowFullDetails(true);
  const hideDetails = () => setShowFullDetails(false);

  return (
    <>
      <div className={styles.about_us_container}>
        <p className={styles.about_us_header}>About Company:</p>
        <div className={styles.about_us_details}>
          <p className={styles.about_us_details_header}>
            <b>About Us</b>
          </p>
          <p className={styles.about_us_details_description}>
            {jobDetailsFromCompany}
          </p>
          <CustomButton
            type="link"
            text="View Job"
            className={styles.view_more_button}
            onClick={showDetails}
          />
        </div>
      </div>
      <Modal
        open={showFullDetails}
        onClose={hideDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.about_us_modal}>
          <h3 className={styles.modal_title}>Job Description</h3>
          <div className={styles.modal_content}>
            <p className={styles.about_us_details_header_modal}>
              <b>About Us</b>
            </p>
            <p className={styles.about_us_details_description_modal}>
              {jobDetailsFromCompany}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AboutUs;
