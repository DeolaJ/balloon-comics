import { FC } from 'react';

import SpacedList from '../SpacedList';

import { BaseNavContainer } from './nav.styled';

type BaseNavProps = {
  className?: string;
};

const BaseNav: FC<BaseNavProps> = ({ className, children }) => {
  return (
    <BaseNavContainer className={className}>
      <SpacedList>{children}</SpacedList>
    </BaseNavContainer>
  );
};

export default BaseNav;
