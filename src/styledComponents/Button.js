import styled from 'styled-components';

const Button = styled.button`
    border-radius: 5px;
    background-color: #1ebbd7
    color: white;
    padding: 1.5%
    font-size: 1.3em
    margin: 0.8%;

    &:hover {
        background-color: #a5e3ef;
    }
`

export const CategoryButton = styled(Button)`
    padding: 2%;
    font-size: 1.2em;

    @media screen and (max-width: 375px) {
        padding: 1.2%;
        font-size: 0.9em;  
    }
`

export const ClickedCategoryButton = styled(Button)`
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

export const LetterButton = styled(Button)`
    width: 7.5%;
    font-size: 0.95em;
    margin: 0;
`
export const ClickedLetterButton = styled(Button)`
    width: 7.5%;
    font-size: 0.95em;
    background-color: #d2f1f7;
    color: #1ebbd7;
    margin: 0;
`

export const NewGameButton = styled(Button)`
    background-color: #FFA500;
    margin-bottom: 3%;

    &:hover {
        background-color: #FFC04C;
    }
`