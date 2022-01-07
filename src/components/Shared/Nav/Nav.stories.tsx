import { Meta } from '@storybook/react';

import Nav from './base';
import ExternalNav from './ExternalNav';

export default {
  component: Nav,
  title: 'Components/Nav',
} as Meta;

const BaseNavTemplate = (args) => <Nav {...args}>Default Nav</Nav>;

export const Base = BaseNavTemplate.bind({});

const ExternalNavTemplate = (args) => <ExternalNav {...args} />;

export const External = ExternalNavTemplate.bind({});
