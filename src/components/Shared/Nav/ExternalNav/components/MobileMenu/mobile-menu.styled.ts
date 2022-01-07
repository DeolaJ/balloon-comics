import styled, { keyframes } from 'styled-components';

const slides = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 25px;
  }
`;

export const MobileButton = styled.button`
  .top {
    width: 12px;
  }

  .middle {
    width: 20px;
  }

  .bottom {
    margin-bottom: 0;
  }

  &:hover {
    span {
      animation: ${slides} 1s cubic-bezier(0.39, 0.58, 0.57, 1) alternate-reverse both;
      animation-iteration-count: infinite;
    }
    .top {
      animation-delay: 0s;
    }
    .middle {
      animation-delay: 0.3s;
    }
    .bottom {
      animation-delay: 0.6s;
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  z-index: 3;
  transform: translateX(200px);
  width: 200px;
  transition: transform 400ms cubic-bezier(0.39, 0.58, 0.57, 1);

  &.true {
    transform: translateX(0);
  }

  a {
    color: #222;
    font-weight: 400;
    transition: ease-in-out border-bottom 300ms;
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

export const MobileMenuList = styled.ul`
  box-shadow: 0 0 11px 3px rgba(0, 0, 0, 0.1);
`;
