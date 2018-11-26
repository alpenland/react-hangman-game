import styled from 'styled-components';

export const CategoryWrapper = styled.div`
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