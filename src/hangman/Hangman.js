import React from 'react';
import styled from 'styled-components';

import Categories from '../categories/Categories';
import Header from '../header/Header';
import Keyboard from '../keyboard/Keyboard';
import StatusBar from '../statusBar/StatusBar';

const GameWrapper = styled.div`
    font-family: "Arial";
    font-weight: bold;
    text-align: center;
    font-size: 1.1em;
    max-width: 60%;
    margin: auto;
    color: #005073;
`

const Hangman = () => {
    return (
        <GameWrapper>
            <Header />
            <Categories />
            <Keyboard />
        </GameWrapper>
    )
};

export default Hangman;

//<StatusBar />