import React from 'react';

interface Props{
  finalScore: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>)=>void;
}

const ResultPage = ({finalScore, callback}: Props) => {
  return(
    <div className="scoreWrap">
      <p className="score">
        <span>당신의 맞춤법 점수는?</span><span>{finalScore} 점</span>
        </p>
      <button onClick={callback}>다시 풀기</button>
    </div>
  );
}

export default ResultPage;