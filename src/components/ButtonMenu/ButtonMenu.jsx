/* eslint-disable react/jsx-props-no-spreading */
import React, { cloneElement, Children } from 'react';
import styled from 'styled-components';

const TabMenuStyled = styled.div`  
    align-items: center;
    display: flex;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

    & > button,
    & > a {
        flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")}
    }

    ${({ disabled }) => {
        if (disabled) {
            return `
                opacity: 0.5;

                & > button:disabled {
                    background-color: transparent;
                }
            `
        }
        return "";
    }}
`;

const TabMenu = ({
    activeIndex = 0,
    onItemClick,
    disabled,
    children,
    fullWidth = false,
    ...props
}) => (
        <TabMenuStyled disabled={disabled} fullWidth={fullWidth} {...props}>
            {Children.map(children, (child,  index) => cloneElement(child, {
                    isActive: activeIndex === index,
                    onClick: onItemClick ? () => onItemClick(index) : undefined,
                    disabled,
                }))}
        </TabMenuStyled>
    );

export default TabMenu;