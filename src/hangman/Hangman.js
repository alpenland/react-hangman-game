import React from 'react';
import { connect } from 'react-redux';
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

class Hangman extends React.Component {
    render () {
        return (
            <GameWrapper>
                <Header />
                <StatusBar />
                <Categories />
                <Keyboard />
            </GameWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    winCount: state.status.winCount,
    lossCount: state.status.lossCount
});

export default connect(mapStateToProps)(Hangman);