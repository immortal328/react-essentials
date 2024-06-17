import components  from './assets/components.png';
import jsx  from './assets/jsx-ui.png';
import config  from './assets/config.png';
import stateMngmnt  from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: components,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsx,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: config,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateMngmnt,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];