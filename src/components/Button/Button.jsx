/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ButtonStyled from './ButtonStyled';

const Button = ({ 
    text,
    isPrimary = false,
    onClick = () => undefined,
    ...props
}) => (
    <ButtonStyled isPrimary={isPrimary} onClick={onClick} {...props}>
        {text}
    </ButtonStyled>
);

export default Button;