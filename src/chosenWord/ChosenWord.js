import React from 'react';
import { connect } from 'react-redux';

import { UnorderedList, ListItem, GuessedLetter, Letter } from '../styledComponents/Letters';

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