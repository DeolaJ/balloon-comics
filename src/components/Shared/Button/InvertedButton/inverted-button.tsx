import { FC } from 'react';
import { InvertedButtonContainer } from './inverted-button.styled';
import { ButtonProps } from '../../../../types';
import { twMerge } from 'tailwind-merge';

const InvertedButton: FC<ButtonProps> = ({
  size,
  text,
  className,
  onClick,
  type,
  disabled,
  buttonRef,
  full,
  style,
}) => {
  return (
    <InvertedButtonContainer
      size={size}
      className={twMerge(
        `border-none bg-purple-50 font-semibold cursor-pointer text-sm sm:text-base rounded-sm px-4 py-3 sm:px-5 sm:py-3.5 text-purple-600 hover:bg-purple-100 inline-block ${className}`
      )}
      text={text}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ref={buttonRef}
      full={full}
      style={style}
    />
  );
};

export default InvertedButton;
