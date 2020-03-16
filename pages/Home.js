import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Cards from "./components/Cards.js";
import Header from "./components/Header.js";

import { SearchProvider } from "./components/contexts.js";

function Home(props) {
    const { general, theme } = useSelector(state => state);

    return (
        <Container theme={theme}>
            <SearchProvider>
                <Header />
                <Cards />
            </SearchProvider>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${props => props.theme.darkGray};
    display:block;
    float:right;
    width:90%;
    height: 100%;
    max-width: calc(100% - 150px);
    font-family: ${props => props.theme.fontPrimary};
    color: ${props => props.theme.offWhite};
`

export default Home;