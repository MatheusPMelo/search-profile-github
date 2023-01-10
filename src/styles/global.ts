import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
        transition: all .3s ease;
    }

    body {
        width: 100%;
        margin: 0;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.primary};
    }

    html, body {
        scroll-behavior: smooth;
    }

    h1,h2,h3,h4 {
        color: ${props => props.theme.colors.text};
        font-weight: 700;
    }

    h2 {
        font-size: 3rem;
        
        @media(max-width: 500px) {
            font-size: 1.5rem;
        }
    }

    h3 {
        font-size: 1.5rem;

        @media(max-width: 500px) {
            font-size: 1rem;
        }
    }

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
    }
`;

export const WidthContainer = styled.div`
    max-width: calc(1170px + 3rem);
    padding: 0 1rem;
    margin: 0 auto;
    width: 100%;

    @media(min-width: 2000px) {
        max-width: calc(1170px + 5rem);
        padding: 0;
    }
`;

export const RowCenter = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;