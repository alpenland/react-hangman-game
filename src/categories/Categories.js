import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectCategory } from './actions';
import RemainingLives from '../remainingLives/RemainingLives';
import ChosenWord from '../chosenWord/ChosenWord';

const Button = styled.button`
    background-color: #1ebbd7;
    color: white;
    padding: 10px;
    font-size: 1.1em;
    margin: 5px;
    border-radius: 5px;
    border: 0;

    &:disabled {
        background-color: #d2f1f7;
        color: #1ebbd7;
        border: white;
    }

    &:hover {
        background-color: #a5e3ef;
    }
`

class Categories extends React.Component {
    handleChooseCategory = ({currentTarget}) => {
        let category = currentTarget.value;
        let i = Math.floor(Math.random() * 9);
        this.props.selectCategory(category,i);
        currentTarget.disabled = true;
    };
    render () {
        return (
            <div>
                <p>
                    {
                        this.props.categories.map((category) => {
                            return (
                                <Button
                                    value={category.value}
                                    key={category.value}
                                    onClick={this.handleChooseCategory}
                                    disabled={category.disabled}
                                >
                                    {category.title}
                                </Button>
                            )
                        })
                    }
                </p>
                <ChosenWord />
                <RemainingLives />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    remainingLives: state.keyboard.remainingLives,
    chosenCategory: state.category.chosenCategory,
    categories: state.category.categories
});

export default connect( mapStateToProps, { selectCategory })(Categories);
