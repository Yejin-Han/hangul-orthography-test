import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty } from './API';

type AnswerObject={
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS=10;

const App=()=>{
  const [loading, setLoading]=useState(false);
  const [questions, setQuestions]=useState<QuestionState[]>([]);
  const [num, setNum]=useState(0);
  const [userAnswers, setUserAnswers]=useState<AnswerObject[]>([]);
  const [score, setScore]=useState(0);
  const [gameOver, setGameOver]=useState(true);

  console.log(questions);

  const startTrivia=async()=>{
    setLoading(true);
    setGameOver(false);
    const newQuestions=await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNum(0);
    setLoading(false);
  }
  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>)=>{

  }
  const nextQuestion=()=>{
    
  }
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || (userAnswers.length === TOTAL_QUESTIONS) ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score:</p> : null}
      {loading && <p>Loading Questions...</p>}  {/* loading===true면 후자 실행(삼항 연산자의 false일 때의 경우 생략해준 수식) */}
      {!loading && !gameOver && (
        <QuestionCard 
          questionNum={num+1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[num].question}
          answers={questions[num].answers}
          userAnswer={userAnswers ? userAnswers[num] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === num+1 && num !== (TOTAL_QUESTIONS-1) ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
