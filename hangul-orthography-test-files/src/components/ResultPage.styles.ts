import styled from 'styled-components';

interface CorrectProps{
  isCorrect: boolean;
}

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
  .comment{
    margin-top: 3rem;
    span{
      display: block;
      margin-top: 0.6rem;
      color: #2f3239;
    }
  }
  .answer_zone{
    margin-top: 2.2rem;
    background: #d2e1f7;
    border-radius: 10px;
    ol{
      margin: 2rem 0;
      list-style-position: inline;
      li{
        width: 80%;
        margin-bottom: 0.7rem;
        text-align: left;
        .correct_answer{
          color: red;
          margin-left: 1.4rem;
        }
      }
    }
  }
  .replay{ margin: 3rem 0 9rem; }
  @media screen and (min-width: 1280px){
    width: 80%;
    .score_wrap{
      font-size: 3rem;
      .score{ font-size: 4.2rem; }
    }
    .comment{
      p{
        font-size: 2rem;
        span{ font-size: 1.3rem; }
      }
    }
    .answer_zone{
      width: 70%;
      h3{
        padding-top: 2rem;
        font-size: 2rem;
      }
      ol{
        font-size: 2rem;
        li{ margin-left: 11%; }
      }
    }
  }
  @media screen and (max-width: 1279px) and (min-width: 768px){
    width: 80%;
    .score_wrap{
      font-size: 2.4rem;
      .score{ font-size: 3.6rem; }
    }
    .comment{
      p{
        font-size: 1.8rem;
        span{ font-size: 1.2rem; }
      }
    }
    .answer_zone{
      width: 70%;
      h3{
        padding-top: 2rem;
        font-size: 1.8rem;
      }
      ol{
        font-size: 1.8rem;
        li{ margin-left: 17%; }
      }
    }
  }
  @media screen and (max-width: 767px){
    width: 95%;
    .score_wrap{
      font-size: 1.8rem;
      padding: 0 16px;
      flex-direction: column;
      line-height: 3.5rem;
      .score{ font-size: 3.6rem; }
    }
    .comment{
      p{
        font-size: 1.8rem;
        span{ font-size: 1.2rem; }
      }
    }
    .answer_zone{
      width: 90%;
      h3{
        padding-top: 2rem;
        font-size: 1.8rem;
      }
      ol{
        font-size: 1.8rem;
        li{
          margin-left: 17%;
          width: 90%;
        }
      }
    }
  }
`;

export const MyAnswer = styled.li<CorrectProps>`
  .my_answer{
    text-decoration: ${({isCorrect}) =>
      isCorrect ? 'none' : 'line-through'
    };
  }
  .correct_answer{
    display: ${({isCorrect}) =>
      isCorrect ? 'none' : 'inline'
    };
  }
`;