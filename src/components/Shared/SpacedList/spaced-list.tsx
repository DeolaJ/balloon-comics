import { FC } from 'react';
import { SpacedListContainer } from './spaced-list.styled';

type SpacedListProps = {
  className?: string;
  compact?: boolean;
};

const SpacedList: FC<SpacedListProps> = ({ children, className, compact }) => {
  return (
    <SpacedListContainer className={`w-full ${className || ''} ${compact ? 'compact' : ''}`}>
      {children}
    </SpacedListContainer>
  );
};

export default SpacedList;
