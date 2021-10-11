import React from 'react';
import styled from 'styled-components';
import HistoryOwner from './HistoryOwner/HistoryOwner';

const CardWrapper = styled.div`
    margin-right: 16px;
`

const ImageWrapper = styled.div`
    width: 250px;
    height: 270px;
    overflow: hidden;
    border-radius: 16px;
    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`

const NftImage = styled.img`
    width: inherit;
    height: inherit;
    transition: transform 0.5s ease-in-out;
`

const BodyWrapper = styled.div`
    cursor: pointer;
`

const Flex = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Price = styled.div`
    border: 3px solid #0b5ac8;
    display: grid;
    place-items: center;
    padding: .2rem .4rem;
    border-radius: 4px;
    span {
        color: #0b5ac8;
        font-weight: 600;
        font-size: 12px;
    }
`

const CardNft = ({ nft }) => {

    const { name, image, price } = nft;

    const nameReducer = (text) => {
        const maxCharacters = 15;
        const arrayCharacters = [];
        const nameArrayed = text.split('');

        for (let i = 0; i < maxCharacters; i += 1) {
            if (nameArrayed[i] !== undefined || nameArrayed[i] !== null) 
                arrayCharacters[i] = nameArrayed[i];
        }

        let shortName = arrayCharacters.join('');

        if (name.length > maxCharacters)
            shortName += "..."
        
        return shortName;
    }

        return (<CardWrapper>
            <ImageWrapper>
                <NftImage 
                    src={image}
                    alt="nft"
                />
            </ImageWrapper>

            <BodyWrapper>
                <Flex>
                    <h3 style={{ fontWeight: 'normal' }}>{nameReducer(name)}</h3>
                    <Price>
                        <span>{price} CSPR</span>
                    </Price>
                </Flex>
                <Flex>
                    <HistoryOwner />
                    <p style={{ fontSize: 14, fontWeight: 200 }}>2/100 Available</p>
                </Flex>
                <Flex>
                    <span style={{ fontSize: 12, fontWeight: 400, color: "#CCCCCC" }}>Highest bid <strong style={{ color: "black" }}>80.02 CSPR</strong></span>
                    <p style={{ fontSize: 12, fontWeight: 400, color: "#CCCCCC" }}>New bid🔥</p>
                </Flex>
            </BodyWrapper>
           
        </CardWrapper>)
};

export default CardNft;