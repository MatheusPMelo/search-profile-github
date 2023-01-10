import React from 'react';
import { WidthContainer } from '../../styles/global';
import { Container } from './style';
import { FaSearch } from 'react-icons/fa'

const SearchEngine : React.FC = () => {
    return (
        <WidthContainer>
            <Container>
                <form action="" method="get">
                    <input type="text" />
                    <button type="submit">
                        <FaSearch />
                    </button>
                </form>
            </Container>
        </WidthContainer>
    )
}
export default SearchEngine;