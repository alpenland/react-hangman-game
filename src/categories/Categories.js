import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectCategory } from './actions';
import ChosenWord from '../chosenWord/ChosenWord';
import { Button } from '../button/Button'

const CategoryButton = styled(Button)`
    padding: 2%;
    font-size: 1.2em;

    @media screen and (max-width: 375px) {
        padding: 1.2%;
        font-size: 0.9em;  
    }
`

const ClickedCategoryButton = styled(Button)`
    padding: 2%;
    font-size: 1.2em;
    background-color: #d2f1f7;
    color: #1ebbd7;
    border: white;

    @media screen and (max-width: 375px) {
        padding: 1.2%;
        font-size: 0.9em;  
    }
`
const CategoryWrapper = styled.div`
    margin-top: 2%;    

    @media screen and (max-width: 1303px) {
        max-width: 70%;
        margin: 2% auto auto auto;
    }

    @media screen and (max-width: 768px) {
        max-width: 80%;
        margin: 2% auto auto auto;
    }

    @media screen and (max-width: 375px) {
        max-width: 100%;
        margin: 2% auto auto auto;
    }
`

class Categories extends React.Component {
    handleChooseCategory = ({currentTarget}) => {
        let category = currentTarget.value;
        let i = Math.floor(Math.random() * 34);
        this.props.selectCategory(category,i);
    };
    render () {
        return (
            <CategoryWrapper>
                {
                    this.props.categories.map((category) => {
                        if (this.props.clickedCategory === category.value) {
                            return (
                                <ClickedCategoryButton
                                    value={category.value}
                                    key={category.value}
                                    onClick={this.handleChooseCategory}
                                >
                                    {category.title}
                                </ClickedCategoryButton>                                                                        
                            )
                        } else {
                            return (
                                <CategoryButton
                                    value={category.value}
                                    key={category.value}
                                    onClick={this.handleChooseCategory}
                                >
                                    {category.title}
                                </CategoryButton>
                            )
                        }
                    })
                }
                <ChosenWord />
            </CategoryWrapper>
        )
    }
}

const mapStateToProps = (state) => ({ 
    categories: state.category.categories,
    clickedCategory: state.category.clickedCategory 
});

export default connect( mapStateToProps, { selectCategory })(Categories);