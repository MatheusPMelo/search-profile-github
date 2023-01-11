import styled from 'styled-components';

export const MainContainerRepositories = styled.div`
    margin-top: 3rem;
    width: 100%;
`

export const ContainerRepositories = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 4rem;
    width: 100%;
    justify-content: center;

    .repository{
        background: ${props => props.theme.colors.secondary};
        padding: 2rem;
        border-radius: 1rem;

        &:hover {
            transform: scale(1.1);
        }

        &:not(:hover){
            opacity: .5;
        }
        
    }

    button {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
            background: ${props => props.theme.colors.secondary};
        }
    }
`