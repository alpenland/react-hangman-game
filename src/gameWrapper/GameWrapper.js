import styled from 'styled-components';

export const GameWrapper = styled.div`
    font-family: "Arial";
    font-weight: bold;
    text-align: center;
    font-size: 1.2em;
    max-width: 60%;
    margin: auto;
    color: #005073;

    @media screen and (max-width: 768px) {
        max-width: 80%;
        font-size: 0.9em;
    }

    @media screen and (max-width: 375px) {
        max-width: 70%;
        font-size: 0.8em;
    }

    @media screen and (max-width: 360px) {
        max-width: 70%;
        font-size: 0.7em;
    }
`