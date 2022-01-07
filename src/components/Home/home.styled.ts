import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;
  padding: 4.5rem 0;

  > article {
    flex-basis: 50%;
  }

  @media (min-width: 400px) {
    padding: 3.5rem 0 2.5rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    padding: 3.5rem 0 2.5rem;
    flex-direction: row;
    min-height: 87vh;
  }
`;

export const HomeContentWrapper = styled.article`
  padding: 0 2rem;

  > h1 {
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: capitalize;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 1.25rem;
  }

  > p {
    font-size: 0.9rem;
    line-height: 1.625rem;
    color: #535b63;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 768px) {
    padding: 0 3.5rem;

    > h1 {
      font-size: 3.5rem;
      letter-spacing: -0.501px;
      line-height: 4.25rem;
      margin-bottom: 2rem;
    }

    > p {
      font-size: 1rem;
      line-height: 1.75rem;
      margin-bottom: 3.25rem;
    }
  }
`;

export const HomeImageScroller = styled.article`
  margin: 2rem 0;

  .home__phone-img-wrapper {
    width: 60%;
    margin: 0 auto;
  }

  .home__img--control {
    text-align: center;

    button {
      background: none;
      box-shadow: none;
      cursor: pointer;
      border: none;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.125rem;
      text-transform: uppercase;
      letter-spacing: 0.625rem;
    }

    svg {
      margin-right: 1.875rem;
    }
  }

  @media (min-width: 600px) {
    .home__phone-img-wrapper {
      width: 75%;
    }
  }

  @media (min-width: 1200px) {
    .home__phone-img-wrapper {
      width: 75%;
      margin-right: initial;
      margin-left: auto;
    }
  }
`;
