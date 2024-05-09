import { useState } from 'react';
import CustomButton from '../ui/CustomButton';
import styles from './job-card.module.css';
import { Modal } from '@mui/material';

const AboutUs = () => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const showDetails = () => setShowFullDetails(true);
  const hideDetails = () => setShowFullDetails(false);

  const description = `Your task is to create a candidate application platform that allows
  users to view job listings, filter jobs based on various criteria, and
  implement infinite scroll for a seamless browsing experience. The
  platform should provide a user-friendly interface for viewing and
  applying to jobs. For the UI / Designs please install this extension
  where you can see the job card and filters. Please note that the
  behavior should be infinite scroll and not a load more button. Please
  note that for scope of this assignment you only need to consider the
  Search jobs section only. You are not required to implement the logic
  / UI for post apply.
  
  Your task is to create a candidate application platform that allows
  users to view job listings, filter jobs based on various criteria, and
  implement infinite scroll for a seamless browsing experience. The
  platform should provide a user-friendly interface for viewing and
  applying to jobs. For the UI / Designs please install this extension
  where you can see the job card and filters. Please note that the
  behavior should be infinite scroll and not a load more button. Please
  note that for scope of this assignment you only need to consider the
  Search jobs section only. You are not required to implement the logic
  / UI for post apply.
  
  Your task is to create a candidate application platform that allows
  users to view job listings, filter jobs based on various criteria, and
  implement infinite scroll for a seamless browsing experience. The
  platform should provide a user-friendly interface for viewing and
  applying to jobs. For the UI / Designs please install this extension
  where you can see the job card and filters. Please note that the
  behavior should be infinite scroll and not a load more button. Please
  note that for scope of this assignment you only need to consider the
  Search jobs section only. You are not required to implement the logic
  / UI for post apply.`;

  return (
    <>
      <div className={styles.about_us_container}>
        <p className={styles.about_us_header}>About Company:</p>
        <div className={styles.about_us_details}>
          <p className={styles.about_us_details_header}>
            <b>About Us</b>
          </p>
          <p className={styles.about_us_details_description}>{description}</p>
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
              {description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AboutUs;
