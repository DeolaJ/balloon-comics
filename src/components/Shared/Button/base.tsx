import { forwardRef } from 'react';
import { ButtonContainer } from './button.styled';
import { ButtonProps } from '../../../types';

type ButtonTheme = {
  [key: string]: string;
};

const dimension: ButtonTheme = {
  sm: 'button-sm',
  lg: 'button-lg',
};

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, text, className, onClick, type, disabled, style, full }, ref) => {
    return (
      <ButtonContainer
        className={`${dimension[size]} ${className} ${full ? 'full' : ''} ${
          disabled ? 'disabled' : ''
        }`}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        ref={ref}
        style={style}
        aria-disabled={disabled}>
        {text}
      </ButtonContainer>
    );
  }
);

export default BaseButton;
