export const AVATAR_EXAMPLE_ARRAY = [
  {
    alt: 'Remy Sharp',
    src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww',
  },
  {
    alt: 'Travis Howard',
    src: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const MIN_EXPERIENCE_OPTIONS = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
];

export const JOB_FILTER_LIST = [
  {
    id: 'min_experience',
    label: 'Experience',
    isMulti: true,
    placeholder: 'Experience',
    options: MIN_EXPERIENCE_OPTIONS,
    isSelect: true,
  },
  {
    id: 'base_pay',
    label: 'Base Pay',
    isMulti: true,
    placeholder: 'Base Pay',
    options: [],
    isSelect: true,
  },
  {
    id: 'role',
    label: 'Role',
    isMulti: true,
    placeholder: 'Role',
    options: [],
    isSelect: true,
  },
  {
    id: 'tech_stack',
    label: 'Tech Stack',
    isMulti: true,
    placeholder: 'Tech Stack',
    options: [],
    isSelect: true,
  },
  {
    id: 'location',
    label: 'Location',
    isMulti: true,
    placeholder: 'Location',
    options: [],
    isSelect: true,
  },
  {
    id: 'work_culture',
    label: 'Work Culture',
    isMulti: true,
    placeholder: 'Work Culture',
    options: [],
    isSelect: true,
  },
  {
    id: 'company_name',
    label: 'Company Name',
    isMulti: true,
    placeholder: 'Company Name',
    options: [],
    isSelect: false,
  },
];
