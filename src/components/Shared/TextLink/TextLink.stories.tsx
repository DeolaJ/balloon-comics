import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextLink from './text-link';

export default {
  component: TextLink,
  title: 'Components/TextLink',
  argTypes: {
    text: {
      description: 'Description of the text link',
      control: 'text',
    },
    link: {
      description: 'link of the text link',
      control: 'text',
    },
    color: {
      description: 'Color of the text link',
      control: 'color',
    },
  },
} as Meta;

const TextLinkTemplate = (args) => <TextLink onClick={action('onClickAction')} {...args} />;

export const Bare = TextLinkTemplate.bind({});

Bare.args = {
  text: 'Click me',
  link: '/',
  color: 'red',
};
