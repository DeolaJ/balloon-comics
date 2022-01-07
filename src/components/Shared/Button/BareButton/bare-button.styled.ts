import styled from 'styled-components';
import BaseButton from '../base';

export const BareButtonContainer = styled(BaseButton)`
  color: var(--color-bare, --color-mid-grey);
  background: none;
  cursor: pointer;
  border: none;
  height: auto;
  padding: 0;

  .button-lg,
  .button-sm {
    height: auto;
    padding: 0;
    font-size: 0.75rem;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    &.button-sm,
    &.button-lg {
      font-size: 0.875rem;
    }
  }
`;
