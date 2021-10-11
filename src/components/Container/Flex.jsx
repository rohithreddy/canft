import React from 'react';
import styled from 'styled-components';

const FlexStyled = styled.div`
    display: flex;
`
const Flex = ({ children }) => <FlexStyled>{children}</FlexStyled>;

export default Flex;
