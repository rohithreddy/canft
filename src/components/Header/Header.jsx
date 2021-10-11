import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

const HeaderStyled = styled.div`
    align-items: center;
    background-color: white;
    border-bottom: 2px solid #777E90;
    display: flex;
    flex-direction: columen;
    height: 70px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
`;

const ContainerStyled = styled(Container)`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: inherit;
`;

const Header = ({ children }) => (
    <HeaderStyled>
        <ContainerStyled>
            { children }
        </ContainerStyled>
    </HeaderStyled>
);

export default Header;