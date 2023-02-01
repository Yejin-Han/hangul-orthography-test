import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute; left: 50%; z-index: 20;
  transform: translateX(-50%);
  display: flex; flex-flow: column wrap; align-items: center;
  .score_wrap{
    width: 100%;
    height: 7rem;
    line-height: 7rem;
    background: rgba(0,0,0,0.6);
    border-radius: 7px;
    box-sizing: border-box;
    padding: 0 40px;
    color: #fff;
    display: flex; justify-content: space-between;
    font-family: 'BMJUA', '맑은 고딕', sans-serif;
  }
  .comment{ margin-top: 3rem; }
  .comment>p>span{
    display: block;
    margin-top: 0.6rem;
    color: #2f3239;
  }
  .answer_zone{
    margin-top: 3rem;
    background: #d2e1f7;
    border-radius: 10px;
  }
  .answer_zone>ol{ margin-top: 2rem; }
  .answer_zone>ol>li{ width: 60%; margin: 0 auto; }
  @media screen and (min-width: 1280px){
    width: 80%;
    .score_wrap{ font-size: 3rem; }
    .score_wrap>.score>span{ font-size: 4.2rem; }
    .comment>p{ font-size: 2rem; }
    .comment>p>span{ font-size: 1.3rem; }
    .answer_zone{ width: 50%; }
    .answer_zone>h3{
      padding-top: 2rem;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1279px) and (min-width: 768px){
    
  }
  @media screen and (max-width: 767px){
    
  }
`;