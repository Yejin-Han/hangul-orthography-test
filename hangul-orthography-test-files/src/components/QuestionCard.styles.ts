import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute; left: 50%; z-index: 20;
  transform: translateX(-50%);
  .number{
    font-family: 'BMJUA', '맑은 고딕', sans-serif;
    margin-bottom: 2rem;
    span{ font-size: 1.6rem; }
  }
  .realQ{
    margin-bottom: 4rem;
    span{
      display: inline-block;
      height: 3rem;
      border-bottom: 2px solid #222;
    }
  }
  @media screen and (min-width: 1280px){
    width: 80%;
    .number{
      font-size: 2.3rem;
      span{ font-size: 1.6rem; }
    }
    .realQ{
      font-size: 3rem;
      span{ width: 8rem; }
    }
  }
  @media screen and (max-width: 1279px) and (min-width: 768px){
    width: 90%;
    .number{
      font-size: 2.3rem;
      span{ font-size: 1.6rem; }
    }
    .realQ{
      font-size: 3rem;
      span{ width: 8rem; }
    }
  }
  @media screen and (max-width: 767px){
    width: 95%;
    .number{
      font-size: 2rem;
      span{ font-size: 1.2rem; }
    }
    .realQ{
      font-size: 2.075rem;
      span{ width: 6rem; }
    }
  }
`;

interface ButtonWrapperProps{
  userClicked: boolean;
}

export const ButtonWrapper=styled.div<ButtonWrapperProps>`
  transition: all .3s;
  :hover{ opacity: 0.9; }
  button{
    height: 4rem;
    margin: 5px 0;
    background: ${({userClicked}) =>
      userClicked
      ? 'linear-gradient(90deg, #e96443, #904e95)'
      : 'linear-gradient(90deg, #606c88, #3f4c6b)'
    };
    user-select: none;
    font-family: 'GangwonEdu_OTFBoldA', '맑은 고딕', sans-serif;
    border: 3px solid #fff; border-radius: 1.6rem;
    box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0,0,0,0.25);
    @media screen and (min-width: 1280px){
      width: 60%;
      font-size: 2.5rem;
      line-height: calc(4rem + 6px);
    }
    @media screen and (max-width: 1279px) and (min-width: 768px){
      width: 70%;
      font-size: 2rem;
      line-height: calc(4rem + 3px);
    }
    @media screen and (max-width: 767px){
      width: 80%;
      font-size: 1.6rem;
      line-height: 4rem;
    }
  }
`;