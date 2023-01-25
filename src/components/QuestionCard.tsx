import React from 'react';

type Props={
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any; /* unknown 되는지 일단 모르겠음 */
  questionNum: number;
  totalQuestions: number;
}

/* export default function QuestionCard(){

} */
const QuestionCard=({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions
} : Props)=>(
  <div>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map(answer=>(
        <div>
          <button disabled={userAnswer} onClick={callback} >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;