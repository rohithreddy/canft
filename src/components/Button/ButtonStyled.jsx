import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: ${({ isPrimary }) => isPrimary ? "#336fff" : "white"};
    border: 1px solid #e6e9ed;
    border-radius: 20px;
    color: ${({ isPrimary }) => isPrimary ? "white" : "#777E90"};
    cursor: pointer;
    font-weight: 600;
    outline: none;
    padding: 8px 16px;
    transition: all 0.2s;
    
    &:hover {
        background-color: ${({ isPrimary }) => isPrimary ? "#0049f8" : "#336fff"};
        color: white;
    }    
`;

export default ButtonStyled;
