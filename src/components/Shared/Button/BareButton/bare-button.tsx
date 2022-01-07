import { FC } from 'react';
import { BareButtonContainer } from './bare-button.styled';
import { ButtonProps } from '../../../../types';

interface BareButtonProps extends ButtonProps {
  color?: string;
}

const BareButton: FC<BareButtonProps> = ({
  size,
  text,
  className,
  onClick,
  type,
  disabled,
  buttonRef,
  color,
}) => {
  return (
    <BareButtonContainer
      size={size}
      className={className}
      text={text}
      style={{ '--color-bare': color }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      ref={buttonRef}
    />
  );
};

export default BareButton;
