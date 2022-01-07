import { Meta } from '@storybook/react';

import Logo from './logo';

export default {
  component: Logo,
  title: 'Components/Logo',
  argTypes: {
    loginState: {
      description: 'Is user signed up or not',
      control: 'boolean',
    },
  },
} as Meta;

const LogoTemplate = (args) => <Logo {...args} />;

export const Base = LogoTemplate.bind({});
