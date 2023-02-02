import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { AnswerObject } from '../App';
import { MainButton } from '../App.styles';
import { Wrapper, MyAnswer } from './ResultPage.styles';

interface Props{
  finalScore: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  answerList: AnswerObject[];
}


const ResultPage = ({finalScore, callback, answerList}: Props) => {
  const count = useSpring({
    from: { number: 0 },
    to: {number: finalScore}
  });
  const [ment, setMent] = useState('');
  const scoreCompare = () => {
    if(finalScore === 100){
      setMent('당신은 맞춤법 천재!<span>혹시 국립국어원에서 일하시나요?</span>');
    } else if(finalScore >= 80){
      setMent('맞춤법 2% 부족할 때...<span>한 번 더 해보면 100점은 쉬워요~</span>');
    } else if(finalScore >= 40){
      setMent('오늘부터 나머지 공부!<span>가능성이 보여요! 나아질 수 있어요</span>');
    } else{
      setMent('한국인... 맞나요?<span>한국인의 긍지를 지키기 위해 다시 한 번 도전하세요!</span>');
    }
  }
  useEffect(scoreCompare, []);

  return(
    <Wrapper>
      <p className="score_wrap">
        <span>당신의 맞춤법 점수는? </span>
        <span className="score">
          <animated.span>
            {count.number.to(val => Math.floor(val))}
          </animated.span> 점
        </span>
      </p>
      <div className="comment">
        <p dangerouslySetInnerHTML={{ __html: ment }}></p>
      </div>
      <div className="answer_zone">
        <h3><strong>&#91;정답&#93;</strong></h3>
        <ol>
          {
            answerList.map((list, idx) => (
              <MyAnswer key={idx} isCorrect={list.correct}>
                <span className="my_answer">
                  {list.answer}
                  <span className="del"></span>
                </span>
                <span className="correct_answer">{list.correctAnswer}</span>
              </MyAnswer>
            ))
          }
        </ol>
      </div>
      <MainButton className="replay" onClick={callback}>다시 풀기</MainButton>
    </Wrapper>
  );
}

export default ResultPage;