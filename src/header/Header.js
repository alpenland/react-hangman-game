import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    color: #1895ac;
`

const HeaderWrapper = styled.div`

`

const Header = () => {
    return (
        <div>
            <StyledHeader>Hangman</StyledHeader>
            <div>
                Choose a category. Guess one letter at a time to figure out the word or phrase. <br />
                You have 7 lives. Each wrong guess costs 1 life. Good luck! <br /><br />    
            </div>
        </div>
    )
};

export default Header;