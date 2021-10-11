/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    color: white;
    background-color: #000000;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    outline: none;
    font-weight: 600;

    &:hover {
        opacity: 0.8;
    }
`;

const DisabledButton = styled(ButtonStyled)`
    background-color: transparent;
    border: none;
    color: #777E90;

    &:hover:not(:disabled):not(:active) {
        background-color: transparent;
    }
`;

const ButtonMenuItem = ({
    isActive = false,
    as,
    ...props
}) => {
    if (!isActive) {
        return <DisabledButton forwardedAs={as} {...props} />
    }
    return <ButtonStyled as={as} {...props} />
};

export default ButtonMenuItem;