import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './base';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import DefaultButton from './DefaultButton';
import BareButton from './BareButton';
import InvertedButton from './InvertedButton';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    text: {
      description: 'Label of the button',
      control: 'text',
    },
    size: {
      description: 'Size of the button',
      options: ['sm', 'lg'],
      control: 'radio',
    },
    color: {
      description: 'Color of the bare button',
      control: 'color',
    },
  },
} as Meta;

const BaseButtonTemplate = (args) => <Button onClick={action('onClickAction')} {...args} />;

export const Base = BaseButtonTemplate.bind({});

Base.args = {
  text: 'Click me',
  size: 'sm',
};

const PrimaryButtonTemplate = (args) => (
  <PrimaryButton onClick={action('onClickAction')} {...args} />
);

export const Primary = PrimaryButtonTemplate.bind({});

Primary.args = {
  text: 'Button',
  size: 'sm',
};

const SecondaryButtonTemplate = (args) => (
  <SecondaryButton onClick={action('onClickAction')} {...args} />
);

export const Secondary = SecondaryButtonTemplate.bind({});

Secondary.args = {
  text: 'Button',
  size: 'sm',
};

const DefaultButtonTemplate = (args) => (
  <DefaultButton onClick={action('onClickAction')} {...args} />
);

export const Default = DefaultButtonTemplate.bind({});

Default.args = {
  text: 'Sign up',
  size: 'sm',
};

const BareButtonTemplate = (args) => <BareButton onClick={action('onClickAction')} {...args} />;

export const Bare = BareButtonTemplate.bind({});

Bare.args = {
  text: 'Sign up',
  size: 'sm',
  color: 'red',
};

const InvertedButtonTemplate = (args) => (
  <InvertedButton onClick={action('onClickAction')} {...args} />
);

export const Inverted = InvertedButtonTemplate.bind({});

Inverted.args = {
  text: 'Sign up',
  size: 'sm',
  color: 'red',
};
