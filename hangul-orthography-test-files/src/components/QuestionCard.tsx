import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

interface Props{
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  clickedAnswer: AnswerObject | undefined;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
}

const QuestionCard = ({
  question,
  answers,
  callback,
  clickedAnswer,
  userAnswer,
  questionNum,
  totalQuestions,
} : Props) => (
  <Wrapper>
    <p className="number">
      <span>📍</span> 문제 {questionNum} <span>📍</span>
    </p>
    <p className="realQ" dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer,idx) => (
        <ButtonWrapper key={idx} userClicked={clickedAnswer?.answer===answer}>
          <>
          <button value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
          </>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;