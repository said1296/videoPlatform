import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function Card(props) {
  const { general, theme } = useSelector(state => state);

  const [values, setValues] = useState(props.values);
  var [info, setInfo] = useState(false);
  var [over, setOver] = useState(false);
  var [flipping, setFlipping] = useState(false);
  var [width, setWidth] = useState({value: 300, resized: false});
 
  const initialWidth = 300;

  const Container = styled.div `
    position:relative;
    width: ${(!width.resized) ? initialWidth : width.value}px;
    height: ${(!width.resized) ? `calc(3px * ${initialWidth} / 4)` : `calc(3px * ${width.value} / 4)`};
    background-color: ${theme.lightGray};
    border-radius: 10px;
    margin-top: 10px;
    margin-right:10px;
    transform: ${(info) ? "rotateY(-180deg)" : "rotateY(0deg)"};
    animation: ${ () => {
        if(flipping)
        {
          return `rotate 2s`;
        }
      }};
    @keyframes rotate {
      0% {
        transform: ${(info) ? "rotateY(-180deg)" : "rotateY(0deg)"};
        width: ${(width.resized) ? initialWidth : width.value}px;
        height: ${(width.resized) ? `calc(3px * ${initialWidth} / 4)` : `calc(3px * ${width.value} / 4)`};
      }
      100% {
        transform: ${(info) ? "rotateY(0deg)" : "rotateY(-180deg)"};
        width: ${(!width.resized) ? initialWidth : width.value}px;
        height: ${(!width.resized) ? `calc(3px * ${initialWidth} / 4)` : `calc(3px * ${width.value} / 4)`};
      }
    }
  `
  const Likes = styled.div `
    position:absolute;
    top:4%;
    right: 7%;
  `

  const LikesIcon = styled.svg `
    float:right;
    width: 19px;
    height: auto;
    margin-right:10%;
  `

  const LikesNumber = styled.div `
    font-size: 14px;
    margin-top:80%;
    transform: ${(info) ? "rotateY(-180deg)" : ""};

    animation: ${ () => {
                  if(flipping)
                  {
                    return `rotateLikes 2s`;
                  }
                }};

    @keyframes rotateLikes {
      49%{
        transform:rotateY(0deg);
      }
      50% {
        transform: rotateY(180deg);
      }
      100% {
        transform: rotateY(180deg);
      }
    }
  `

  const Info = styled.div `
    display: ${(flipping || !info ) ? "block" : "none"};
    position:absolute;
    width:93%;
    bottom: 4%;
    left: 7%;

    animation: ${ () => {
                  if(flipping)
                  {
                    return `rotateInfo 2s`;
                  }
                }};

    @keyframes rotateInfo {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  `

  const Title = styled.div `
    display: inline-block;
    width: ${(info) ? "80%" : "77%"};
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;

    span {
      display: inline-block;
      animation: ${ () => {
        try{
          var width = document.getElementById(`title-${props.id}`).clientWidth;
        }catch{
          width = 10;
        }
        if(over && width>document.getElementsByClassName('title')[0].clientWidth)
        {
          const marqueeTime = (width*3)/100;
          return `marquee ${marqueeTime}s linear infinite`;
        }
      }
      }
    }

    @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  `

  const InfoIcon = styled.svg `
    cursor: pointer;
    width: 10%;
    height: auto;
    float: right;
    margin-right:7%;
    margin-top:1%;
    transform: rotate(180deg);
  `
  const Details = styled.div `
    display: ${(flipping || info ) ? "block" : "none"};
    width:100%;
    height:100%;
    margin-top:12%;
    margin-left: -7%;
    transform: rotateY(180deg);
    animation: ${ () => {
                if(flipping)
                  {
                    return `rotateDetails 2s`;
                  }
                }};

    @keyframes rotateDetails {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    animation-fill-mode: forwards;
  `

  const Description = styled.div `
    width:85%;
  `
  const Name = styled.div `
    margin-top:5%;
  `

  const Age = styled.div `
  `
  return (
    <Container onMouseEnter={()=>{ (flipping) ? setOver(false) : setOver(true) }} onMouseLeave={()=>{ setOver(false); /*if(info){setFlipping(true)}*/ }} onAnimationEnd={()=>{setFlipping(false);setInfo(prevInfo=>!prevInfo)}}>
        <Likes>
          <LikesIcon viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8653 0C14.6202 0 12.5147 1.79355 11.5 2.8086C10.4853 1.79355 8.37978 0 6.13474 0C2.29577 0 0 2.27527 0 6.08602C0 9.2086 2.82426 11.8194 2.92574 11.9097L10.832 19.686C11.204 20.0516 11.796 20.0516 12.168 19.686L20.0616 11.9355C20.1757 11.8194 23 9.2043 23 6.08602C23 2.27527 20.7042 0 16.8653 0Z" fill="#F78AFA"/>
          </LikesIcon>
          <LikesNumber>{values.likes}</LikesNumber>
        </Likes>
        <Info>
          <Title className="title"><span id={`title-${props.id}`}>{values.title}</span></Title>
          <InfoIcon viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{setWidth({value: 500, resized: true}), setFlipping(true);}}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM11.0003 16.9983C11.5528 16.9983 12.0007 16.5506 12.0007 15.9983C12.0007 15.4461 11.5528 14.9983 11.0003 14.9983C10.4479 14.9983 10 15.4461 10 15.9983C10 16.5506 10.4479 16.9983 11.0003 16.9983ZM12.0036 4.99835H10.003V12.9983H12.0036V4.99835Z" fill="#E5E5E5"/>
          </InfoIcon>
        </Info>
      <Details>
        <Title><h3>{values.title}</h3></Title>
        <Description> {values.description} </Description>
        <Name> Name: {values.user.name} </Name>
        <Age> Age: {values.age} </Age>
      </Details>
    </Container>
  )
}