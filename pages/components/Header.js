import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { SearchContext } from './contexts';

const Header = props => {
  const { general, theme } = useSelector(state => state);
  const [search, setSearch] = useContext(SearchContext);

  useEffect(() => {
    const fetch = async() => {
      try{
        const response = await axios({
          url: `${general.baseURL}/api/videos`,
          method: `POST`,
          data: {
            query: search.query
          }
        });
        setSearch({... search, data: response.data, loading: false});
      } catch(err){
        throw err;
      }
    }
  
    fetch();

    return () => {
    };

  }, [search.loading]);

  return(
    <Container theme={theme}>
        <SearchForm theme={theme}>
          <SearchInput theme={theme} onChange={e => {setSearch({... search, query: e.target.value, loading: true})}} />
          <label>
            <input type="submit" style={{display: "none"}}/>
            <SearchIcon theme={theme} width="18" height="18" viewBox="0 0 18 18">
              <path d="M17 17L12.0962 12.0962M12.0962 12.0962C13.2725 10.9199 14 9.29493 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C9.29493 14 10.9199 13.2725 12.0962 12.0962Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </SearchIcon>
          </label>
        </SearchForm> 
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width:100%;
  height: 40px;
  background-color: ${props => props.theme.darkGray};
`

const SearchForm = styled.form `
  position: absolute;
  width:18px;
  height: 60%;
  left: 5%;
  top: 50%;
  transform: translate(0, -50%);
  transition: 1s;
  vertical-align: middle;
  border-radius: 8px;
  :hover {
    background-color: ${props => props.theme.offWhite};
    width: 300px;
    svg{
      margin-right: 2%;
      path {
        stroke: ${props => props.theme.darkGray};
      }
    }
    input {
      visibility: visible;
      opacity: 1;
      width: 80%;
      background-color: ${props => props.theme.offWhite};
    }
  }
`
const SearchInput = styled.input `
  position: absolute;
  opacity:0;
  width:0px;
  height: 100%;
  margin-left:8px;
  padding: 0px;
  float: left;
  transition: 1s;
  background-color: ${props => props.theme.darkGray};
  border: none;
`

const SearchIcon = styled.svg `
  position:absolute;
  cursor: pointer;
  float:right;
  fill: none;
  top: 50%;
  right: 2%;
  transform: translate(0, -50%);
  width: 18px;
  height: 18px;
  path {
    stroke: ${props => props.theme.offWhite};
  }
`

export default Header;