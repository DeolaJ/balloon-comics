import { FC } from 'react';
import { PrimaryButtonContainer } from './primary-button.styled';
import { ButtonProps } from '../../../../types';
import { twMerge } from 'tailwind-merge';

const PrimaryButton: FC<ButtonProps> = ({
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
    <PrimaryButtonContainer
      size={size}
      className={twMerge(
        `border border-solid bg-transparent cursor-pointer text-sm sm:text-base rounded-sm px-4 py-3 sm:px-5 sm:py-3.5 text-purple-700 border-purple-700 hover:text-purple-900 hover:border-purple-900 inline-block ${className}`
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

export default PrimaryButton;
