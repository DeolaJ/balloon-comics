import styled from 'styled-components';

export const SpacedListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.compact {
    justify-content: flex-start;

    > * + * {
      margin-left: 1rem;
    }
  }
`;
