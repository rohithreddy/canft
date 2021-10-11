/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ButtonStyled from './ButtonStyled';

const Button = ({
  text,
  isPrimary = false,
  onClick = () => undefined,
  startIcon,
  ...props
}) => (
  <ButtonStyled isPrimary={isPrimary} onClick={onClick} {...props}>
    {startIcon}
    {text}
  </ButtonStyled>
);

export default Button;
