import { Meta } from '@storybook/react';

import Loader from './loader';

export default {
  component: Loader,
  title: 'Components/Loader',
  argTypes: {
    light: {
      description: 'Is loader bright or not',
      control: 'boolean',
    },
  },
} as Meta;

const LoaderTemplate = (args) => <Loader {...args} />;

export const Base = LoaderTemplate.bind({});

Base.args = {
  light: false,
};
