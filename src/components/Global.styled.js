import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    img{
        display: inline-block;
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`

`;

export const Section = styled.div`
    width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
`;
