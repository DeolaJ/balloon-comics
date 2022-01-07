import { Meta } from '@storybook/react';

import Home from './home';

export default {
  component: Home,
  title: 'Pages/Home',
} as Meta;

const HomeTemplate = (args) => <Home {...args} />;

export const Base = HomeTemplate.bind({});
