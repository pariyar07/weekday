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

const minExp_OPTIONS = [
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

const BASE_PAY_OPTIONS = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '40', label: '40' },
  { value: '50', label: '50' },
  { value: '60', label: '60' },
  { value: '70', label: '70' },
  { value: '80', label: '80' },
  { value: '90', label: '90' },
  { value: '100', label: '100' },
];

const ROLE_OPTIONS = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'ios', label: 'IOS' },
  { value: 'android', label: 'Android' },
  { value: 'tech lead', label: 'Tech Lead' },
];

const TECH_STACK_OPTIONS = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'csharp', label: 'C#' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'php', label: 'PHP' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'scala', label: 'Scala' },
  { value: 'dart', label: 'Dart' },
  { value: 'swift', label: 'Swift' },
  { value: 'objective-c', label: 'Objective-C' },
];

const LOCATION_OPTIONS = [
  { value: 'remote', label: 'Remote' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi_ncr', label: 'Delhi NCR' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'bangalore', label: 'Bangalore' },
];

const WORK_CULTURE_OPTIONS = [
  { value: 'remote', label: 'Remote' },
  { value: 'on-site', label: 'Onsite' },
];

export const JOB_FILTER_LIST = [
  {
    id: 'minExp',
    label: 'Experience',
    isMulti: false,
    placeholder: 'Experience',
    options: minExp_OPTIONS,
    isSelect: true,
  },
  {
    id: 'minJdSalary',
    label: 'Base Pay',
    isMulti: false,
    placeholder: 'Base Pay',
    options: BASE_PAY_OPTIONS,
    isSelect: true,
  },
  {
    id: 'jobRole',
    label: 'Role',
    isMulti: true,
    placeholder: 'Role',
    options: ROLE_OPTIONS,
    isSelect: true,
  },
  {
    id: 'tech_stack',
    label: 'Tech Stack',
    isMulti: true,
    placeholder: 'Tech Stack',
    options: TECH_STACK_OPTIONS,
    isSelect: true,
  },
  {
    id: 'location',
    label: 'Location',
    isMulti: true,
    placeholder: 'Location',
    options: LOCATION_OPTIONS,
    isSelect: true,
  },
  {
    id: 'work_culture',
    label: 'Work Culture',
    isMulti: true,
    placeholder: 'Work Culture',
    options: WORK_CULTURE_OPTIONS,
    isSelect: true,
  },
  {
    id: 'companyName',
    label: 'Company Name',
    isMulti: true,
    placeholder: 'Company Name',
    isSelect: false,
  },
];
