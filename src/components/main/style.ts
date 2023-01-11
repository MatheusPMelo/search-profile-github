import styled from 'styled-components';

export const ContainerMain = styled.section`
    max-width: calc(100% - 5vw);
    margin: 0 auto;
    padding: 4rem 1rem;
    display: flex;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input, button {
        background: transparent;
        font-size: 1rem;
        font-style: italic;
        border: none;
        color: ${props => props.theme.colors.text};
        outline: none;
        padding: 1rem 0.5rem;

        &[type="text"] {
            border-bottom: 2px solid ${props => props.theme.colors.text}
        }
    }

    button {
        padding: 1rem;
        cursor: pointer;

        &:hover {
            color: ${props => props.theme.colors.secondary};
        }
    }
`

export const ContainerContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    place-items: center;
    padding-top: 4rem;
    gap: 4rem;



    .content-image{
        img{
            border-radius: 100%;
            height: 300px;
            width: 300px;
            object-fit: contain;
            background-color: ${props => props.theme.colors.secondary};
            box-shadow: 0 0 0 3px ${props => props.theme.colors.secondary};

            &:hover {   
                box-shadow: 0 0 5px 5px ${props => props.theme.colors.secondary}; 
            }
        }
    }
`

export const ContainerDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    > div {
        padding: .5rem 0;
        h3 {
            font-size: 1.2rem;
            font-weight: 600;
            font-style: italic;
        }

        p, a{
            color: ${props => props.theme.colors.text};

            &:hover {
                color: ${props => props.theme.colors.secondary};
            }
        }
    }
`

