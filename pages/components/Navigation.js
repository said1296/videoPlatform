import React, { useState } from 'react' 
import styled from 'styled-components'
import logoImg from './imgs/logotype.svg'
import { useSelector } from 'react-redux'

const Navigation = () => {
   const { theme } = useSelector(state => state);
   
   return (
      <Container theme={theme}>
            <Login theme={theme}>Login</Login>
            <Button Home href='/' theme={theme}> Home </Button>
            <Button About href='/about' theme={theme}> About </Button>
            <Logo href="/" theme={theme}><img src={logoImg} /></Logo>
      </Container>
   );
}

const Logo = styled.a`
      grid-row: 19;
      img{
         @media (min-width: 768px) {
            height: 4vw;
         }
      }

   `

   const Button = styled.a`
      display: flex;
      align-items: center;
      justify-content: center;

      width:100%;
      height: 100%;
      text-decoration: none;
      font-family: ${props => props.theme.fontPrimary};
      font-size: 17px;
      color: ${props => props.theme.offWhite};
      min-height: 50px;
      -webkit-transition:  background-color 0.5s;
      -moz-transition:    background-color 0.5s;
      -ms-transition:     background-color 0.5s;
      -o-transition:      background-color 0.5s;
      transition:         background-color 0.5s;

      ${props => {
         var hoverCss, css = ""
         if(props.Home){
            css = 'grid-row: 9;';
            hoverCss = `background-color: ${props.theme.primary};`
         }
         else if(props.About){
            hoverCss = `background-color: ${props.theme.secondary};`
         }
         return `
            ${css}
            :hover {
               ${hoverCss}
            }
         `

      }}
   `
   const Login = styled.button`
      grid-row: span 2;
      min-height:30px;
      min-width: 80px;
      height: 40%;
      width: 50%;

      margin-top:40px;
      font-family: ${props => props.theme.fontPrimary};
      font-size: 15px;
      @media (min-width: 1140px) {
            font-size: 18px;
      }
      letter-spacing: 0.2em;
      cursor: pointer;
      background-color: ${props => props.theme.pink};
      text-decoration: none;
      color:${props => props.theme.lightGray};
      border: none;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      :hover{
         filter: brightness(0.9);
      }
   `


   const Container = styled.div`
      position:fixed;
      float:left;
      overflow-x: hidden;
      top:0px;
      left:0p;
      min-width: 150px;
      min-height: 700px;
      width: 10%;
      height: 100%;
      background-color: ${props => props.theme.lightGray};
      letter-spacing: 1em;

      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(20, 1fr);
      justify-items: center;
      align-items: center;
   `
 
export default Navigation;