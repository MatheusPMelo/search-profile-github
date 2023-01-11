import styled from 'styled-components';

export const ContainerRepositories = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 4rem;

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
`