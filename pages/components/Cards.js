import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { CardProvider, SearchContext } from './contexts';

import Card from "./Card.js";

function Cards(props) {
  const [search] = useContext(SearchContext);
  console.log("a")

  return (
    <Container>
      <CardProvider>
      {Object.keys(search.data).map((keyName, index) => {
          return <Card values={search.data[keyName]} key={index} id={index} />
      })}
      </CardProvider>
    </Container>
  )
}

const Container = styled.div `
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export default Cards;