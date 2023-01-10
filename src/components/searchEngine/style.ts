import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;

    > form {
        display: flex;
        gap: 1rem;

        > input, button {
            background: transparent;
            border: none;
            outline: none;
            padding: 1rem;
            color: ${props => props.theme.colors.text};

            &[type="text"] {
                border-bottom: solid 2px #fff;
            }

            &[type="submit"] {
                cursor: pointer;
            }
        }
    }
`