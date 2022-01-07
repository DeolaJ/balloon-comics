import styled from 'styled-components';

export const SocialWrapper = styled.article`
  ul {
    max-width: 200px;
    background: #fff2f3;
  }

  svg {
    width: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background: #771d0d;
    left: 0;
    top: 38%;
    z-index: 0;
  }

  .opensea-icon svg {
    height: 24px;
  }
`;
