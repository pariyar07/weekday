import { useState, useRef } from 'react';
import Select from 'react-select';
import { Input as BaseInput } from '@mui/base/Input';
import { JOB_FILTER_LIST } from '../../constants';
import styles from './filters.module.css';

const JobFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    min_experience: '',
    min_base_pay: '',
    role: [],
    tech_stack: [],
    location: [],
    work_culture: [],
    company_name: '',
  });
  const timeoutRef = useRef(null);

  const handleUpdateFilters = (value, filter) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const handleInputChange = (value) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setSelectedFilters((prev) => ({
        ...prev,
        company_name: value,
      }));
    }, 1000);
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
                value={selectedFilters[filter?.id]}
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
