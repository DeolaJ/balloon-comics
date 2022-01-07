import { FC } from 'react';
import { SecondaryButtonContainer } from './secondary-button.styled';
import { ButtonProps } from '../../../../types';

const SecondaryButton: FC<ButtonProps> = ({
  size,
  text,
  className,
  onClick,
  type,
  disabled,
  buttonRef,
  full,
}) => {
  return (
    <SecondaryButtonContainer
      size={size}
      className={className}
      text={text}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ref={buttonRef}
      full={full}
    />
  );
};

export default SecondaryButton;
