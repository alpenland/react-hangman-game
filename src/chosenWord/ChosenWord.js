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
    width: 1%;
    margin: .5%;
    border-radius: 15%;
    height: 20px;
`

class ChosenWord extends React.Component {
    render () {
        return (
            <UnorderedList>
                {
                    this.props.chosenWord.map((letter,i) => {
                        return (
                            <ListItem key={letter.i}>
                                {this.props.validGuesses.indexOf(letter) > -1 ? letter : "__"}
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