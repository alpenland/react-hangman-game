import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const UnorderedList = styled.ul`
    border-radius: 15%;
    padding-left: 0;
`

const ListItem = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 1%;
    font-size: 1.2em
    width: 20px;
    margin: 0 .5% 0 .5%;
    border-radius: 15%;
    height: 25px;
    border: 1px solid #1ebbd7;
`
const Letter = styled.div`
    color: white;
    border: none;
`
const GuessedLetter = styled.div`
    color: #4c849d;
    border: none;
`
class ChosenWord extends React.Component {
    render () {
        return (
            <UnorderedList>
                {
                    this.props.chosenWord.map((letter,i) => {
                        return (
                            <ListItem key={letter,1}>
                                {
                                    this.props.validGuesses.indexOf(letter) > -1 ? 
                                    <GuessedLetter>{letter}</GuessedLetter> : 
                                    <Letter>{letter}</Letter>
                                }
                            </ListItem>
                        )
                    })
                }
            </UnorderedList>
        )
    }
}

const mapStateToProps = (state) => ({
    chosenWord: state.category.chosenWord,
    validGuesses: state.keyboard.validGuesses
});

export default connect(mapStateToProps)(ChosenWord);