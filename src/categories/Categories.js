import React from 'react';
import { connect } from 'react-redux';

import ChosenWord from '../chosenWord/ChosenWord';
import { CategoryButton, ClickedCategoryButton } from '../styledComponents/Button'
import { CategoryWrapper } from '../styledComponents/CategoryWrapper';

import { selectCategory } from './actions';

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