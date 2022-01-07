import styled from 'styled-components';

export const DesktopMenuWrapper = styled.ul`
  a {
    color: #222;
    font-weight: 400;
    font-family: Khand, Helvetica, Arial, Verdana, Tahoma, sans-serif;

    &.active {
      border-bottom: 2px solid rgb(31, 32, 68);
      font-weight: 600;
    }

    &:hover {
      font-weight: 600;
    }
  }
`;
