import React from 'react';

import Categories from '../categories/Categories';
import Header from '../header/Header';
import Keyboard from '../keyboard/Keyboard';
import StatusBar from '../statusBar/StatusBar';
import RemainingLives from '../remainingLives/RemainingLives';

import { GameWrapper } from '../styledComponents/GameWrapper';

const Hangman = () => {
    return (
        <GameWrapper>
            <Header />
            <StatusBar />
            <Categories />
            <RemainingLives />
            <Keyboard />
        </GameWrapper>
    )
}

export default Hangman;