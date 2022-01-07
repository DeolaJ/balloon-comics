import { CSSProperties } from 'react';
import styled from 'styled-components';

interface CustomStyleProperties extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export const TextLinkContainer = styled.span<{ style?: CustomStyleProperties }>`
  color: var(--color-bare, --color-mid-grey);

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
