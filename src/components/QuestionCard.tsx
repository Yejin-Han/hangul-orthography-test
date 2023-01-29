import React from 'react';
// Interfaces
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

interface Props{
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  userAnswer: AnswerObject | undefined; //undefined는 왜 되는거지? useranswer이 없으면 게임이 안넘어가야되는거 아닌가
  questionNum: number;
  totalQuestions: number;
}

const QuestionCard=({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions
} : Props)=>(
  <Wrapper>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer,idx)=>(
        <ButtonWrapper
          key={idx}
          correct={userAnswer?.correctAnswer===answer}
          userClicked={userAnswer?.answer===answer}
        > {/* optional chaining in typescript(?.) : userAnswer이 null or undefined면 즉시 중단하고 undefined를 반환하며, 아니라면 이후 코드를 진행한다. */}
          <button disabled={!!userAnswer} value={answer} onClick={callback}> {/* userAnswer ? true : false가능 */}
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;