/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

import CardNft from './components/CardNft';
import Container from './components/Container/Container';
import { ButtonMenu, ButtonMenuItem } from './components/ButtonMenu';
import { Header } from './components/Header';
import { Button } from './components/Button';

import data from '../data';
import casperIcon from './assets/images/casper.png';

const Flex = styled.div`
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
  flex-wrap: wrap;
`;

const CasperIcon = styled.img`
  margin: auto 0;
  margin-right: 8px;
  width: 15px;
`;

const App = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex) => setIndex(newIndex);

  return (
    <div
      id="App"
      style={{ margin: 0, padding: 0, fontFamily: 'Poppins, sans-serif' }}
    >
      <Header>
        <h1 style={{ margin: 0 }}>CANFT</h1>
        <div>
          <Button 
            startIcon={<CasperIcon src={casperIcon} alt="casper-icon" />}
            isPrimary
            text="Connect" 
          />
          <Button
            style={{ marginLeft: 8 }}
            text="Create"
          />
        </div>
      </Header>

      <Container style={{ marginTop: '70px' }}>
        <Flex center>
          <ButtonMenu
            activeIndex={index}
            onItemClick={handleClick}
            style={{ margin: '16px 0px' }}
          >
            <ButtonMenuItem>All items</ButtonMenuItem>
            <ButtonMenuItem>🎨 Art</ButtonMenuItem>
            <ButtonMenuItem>🕹️ Games</ButtonMenuItem>
            <ButtonMenuItem>📸 Photography</ButtonMenuItem>
            <ButtonMenuItem>🎧 Music</ButtonMenuItem>
            <ButtonMenuItem>📹 Video</ButtonMenuItem>
          </ButtonMenu>
        </Flex>

        <Flex>
          {data.map(({ image, name, price }) => (
            <CardNft
              key={name}
              nft={{
                image,
                name,
                price,
              }}
            />
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default App;
