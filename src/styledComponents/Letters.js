import styled from 'styled-components';

export const UnorderedList = styled.ul`
    border-radius: 15%;
    padding-left: 0;
`

export const ListItem = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 1%;
    font-size: 1.2em
    width: 20px;
    margin: 0 .5% 0 .5%;
    border-radius: 15%;
    height: 25px;
    border: 1px solid #1ebbd7;

    @media screen and (max-width: 768px) {
        font-size: 1em;
        width: 16px;
        height: 19px
    }

    @media screen and (max-width: 375px) {
        font-size: .9em;
        width: 12px;
        height: 14px
    }
`

export const Letter = styled.div`
    color: white;
    border: none;
`

export const GuessedLetter = styled.div`
    color: #4c849d;
    border: none;
`