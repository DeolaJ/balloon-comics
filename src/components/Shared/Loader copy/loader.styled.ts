import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.span`
  svg {
    animation: ${rotate} infinite 1200ms linear;
  }

  path {
    fill: var(--color-blue);
  }

  &.light path {
    fill: white;
  }
`;
