import styled from 'styled-components';
import BaseButton from '../base';

export const SecondaryButtonContainer = styled(BaseButton)`
  color: var(--color-white);
  background: var(--color-purple-secondary);
  border: 1px solid var(--color-purple-secondary);
  border-radius: 0.5rem;
  min-width: 8.5rem;
  text-align: center;

  &.button-sm {
    height: 2.5rem;
  }

  @media (min-width: 768px) {
    border-radius: 0.625rem;
    min-width: 10rem;

    &.button-sm {
      height: 3rem;
    }
  }
`;
