import { ReactNode, Ref, CSSProperties } from 'react';

//==============================================================================
// Button
//==============================================================================

export interface CustomStyleProperties extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export type ButtonProps = {
  text: string | ReactNode;
  size?: string;
  className?: string;
  style?: CustomStyleProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  buttonRef?: Ref<HTMLButtonElement>;
  full?: boolean;
};

export type CloudinaryImageProps = {
  public_id: string;
  version: number;
  format: string;
  width: number;
  height: number;
  type: string;
  created_at: string;
};
