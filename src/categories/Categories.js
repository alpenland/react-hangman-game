import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectCategory } from './actions';
import ChosenWord from '../chosenWord/ChosenWord';
import { Button } from '../button/Button'

const CategoryButton = styled(Button)`
    padding: 2.2%;
    font-size: 1.1em;
`
const ClickedCategoryButton = styled(Button)`
    padding: 2.2%;
    font-size: 1.1em;
    background-color: #d2f1f7;
    color: #1ebbd7;
    border: white;
`

class Categories extends React.Component {
    handleChooseCategory = ({currentTarget}) => {
        let category = currentTarget.value;
        let i = Math.floor(Math.random() * 34);
        this.props.selectCategory(category,i);
    };
    render () {
        return (
            <div>
                <p>
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
                </p>
                <ChosenWord />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    categories: state.category.categories,
    clickedCategory: state.category.clickedCategory 
});

export default connect( mapStateToProps, { selectCategory })(Categories);