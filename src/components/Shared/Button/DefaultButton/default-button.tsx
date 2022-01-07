import { FC } from 'react';
import { DefaultButtonContainer } from './default-button.styled';
import { ButtonProps } from '../../../../types';

const DefaultButton: FC<ButtonProps> = ({
  size,
  text,
  className,
  onClick,
  type,
  disabled,
  buttonRef,
}) => {
  return (
    <DefaultButtonContainer
      size={size}
      className={className}
      text={text}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ref={buttonRef}
    />
  );
};

export default DefaultButton;
