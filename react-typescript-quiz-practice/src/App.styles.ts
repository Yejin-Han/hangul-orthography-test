import styled, { createGlobalStyle } from 'styled-components';
import bg1 from './img/bg1.png';
import bg2 from './img/bg2.png';

export const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'OKGUNG';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKGUNG.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html, body{ width: 100%; height: 100%; }
  body, h1, p, div, button{
    margin: 0; padding: 0;
  }
  body{
    overflow: hidden;
    position: relative;
    font-family: 'GangwonEdu_OTFBoldA', '맑은 고딕', sans-serif;
    color: #222;
  }
  button{
    border: 0;
    background: transparent;
    margin: 0 auto;
    color: #222;
    cursor: pointer;
  }
  @media screen and (min-width: 1280px){
    html, body{ font-size: 16px; }
  }
  @media screen and (max-width: 1279px) and (min-width: 768px){
    html, body{ font-size: 14px; }
  }
  @media screen and (max-width: 767px){
    html, body{ font-size: 12px; }
  }
`;

export const Bg = styled.div`
  width: 100%; height: 100%;
  position: absolute; left: 0; top: 0;
  background: #f4f6f7;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  .bg{
    position: absolute;
    opacity: 0.8;
    transition: all .4s;
    @media screen and (min-width: 768px){
      width: 400px; height: 400px;
    }
    @media screen and (max-width: 767px){
      width: 300px; height: 300px;
    }
  }
  .bg1{
    background: url(${bg1}) no-repeat;
    background-size: cover;
    left: -7%; top: -10%;
  }
  .bg2{
    background: url(${bg2}) no-repeat;
    background-size: cover;
    right: -7%; bottom: -10%;
  }
  
`

export const Wrapper = styled.div`
  width: 80%;
  height: 70%;
  text-align: center;
  position: relative; z-index: 10;
  h1{
    font-family: 'OKGUNG', '맑은 고딕', sans-serif;
    letter-spacing: -2px;
    filter: drop-shadow(3px 2px 3px rgba(0,0,0,0.7));
  }
  .text{
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  .start, .next, .finish{ 
    display: block;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    font-family: 'BMJUA', '맑은 고딕', sans-serif;
    letter-spacing: 2px; color: #fff;
    transition: all .4s;
  }
  .start, .finish{
    width: 30%;
    line-height: 5rem;
    border-radius: 2.5rem;
    background-image: linear-gradient(126deg, #FC5C7D, #6A82FB);
    font-size: 2rem;
    margin-top: 10rem;
  }
  .start:hover, .next:hover, .finish:hover{
    filter: brightness(90%);
  }
  .next{
    width: 25%;
    line-height: 4rem;
    border-radius: 2rem;
    background-image: linear-gradient(126deg, #6eafb4, #56ccff);
    font-size: 1.6rem;
    margin-top: 25rem;
    transition: all .4s;
  }
  .finish{ margin-top: 25rem; }
  @media screen and (min-width: 1280px){
    h1{ font-size: 140px; }
    .start, .finish{ width: 30%; }
    .next{ width: 25%; }
  }
  @media screen and (max-width: 1279px) and (min-width: 768px){
    h1{ font-size: 110px; }
    .start, .finish{ width: 50%; }
    .next{ width: 40%; }
  }
  @media screen and (max-width: 767px){
    h1{ font-size: 50px; }
    .start, .finish{ width: 70%; }
    .next{ width: 60%; }
  }
`;