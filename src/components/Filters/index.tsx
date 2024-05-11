import { useRef } from 'react';
import Select from 'react-select';
import { Input as BaseInput } from '@mui/base/Input';
import { JOB_FILTER_LIST } from '../../utils/constants';
import styles from './filters.module.css';
import {
  setMinExperience,
  setMinBasePay,
  setRole,
  setTechStack,
  setLocation,
  setWorkCulture,
  setCompanyName,
} from '../../redux/store/jobs/jobsSlice';
import { useDispatch } from 'react-redux';

const JobFilters = () => {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  const handleInputChange = (value) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch(setCompanyName(value));
    }, 1000);
  };

  const handleUpdateFilters = (value, filter) => {
    switch (filter) {
      case 'minExp':
        dispatch(setMinExperience(value));
        break;
      case 'minJdSalary':
        dispatch(setMinBasePay(value));
        break;
      case 'jobRole':
        dispatch(setRole(value));
        break;
      case 'tech_stack':
        dispatch(setTechStack(value));
        break;
      case 'location':
        dispatch(setLocation(value));
        break;
      case 'work_culture':
        dispatch(setWorkCulture(value));
        break;
      case 'companyName':
        dispatch(setCompanyName(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.filters_container}>
      {JOB_FILTER_LIST?.map((filter) => {
        return (
          <div key={filter?.id} className={styles.main_filter}>
            <p className={styles.filter_label}>{filter?.label}</p>
            {filter?.isSelect ? (
              <Select
                placeholder={filter?.placeholder}
                closeMenuOnSelect={false}
                isMulti={filter?.isMulti}
                options={filter?.options}
                className={styles.select_input}
                onChange={(value) => handleUpdateFilters(value, filter?.id)}
              />
            ) : (
              <BaseInput
                className={styles.text_input}
                placeholder={filter?.placeholder}
                onChange={(e) => handleInputChange(e.target.value)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default JobFilters;
