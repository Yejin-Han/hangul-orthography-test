import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Interfaces
import { QuestionState, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export interface AnswerObject{
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

  const startTrivia=async()=>{ //api call
    setLoading(true);
    setGameOver(false);
    const newQuestions=await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNum(0);
    setLoading(false);
  }
  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>)=>{ //trigger when user selects an answer
    if(!gameOver){
      //get the user answers
      const answer=e.currentTarget.value;
      //check answer against correct value
      const correct=questions[num].correct_answer === answer; //boolean
      //add score if answer is correct
      if(correct) setScore(prev=>prev+10); //10점씩 증가
      //save answer in the array for user answers
      const answerObject={
        question: questions[num].question,
        answer, //<==>answer: answer (정확히 같으므로 생략 가능)
        correct,
        correctAnswer: questions[num].correct_answer
      }
      setUserAnswers(prev=>[...prev, answerObject]);
    }
  }
  const nextQuestion=()=>{ //trigger when user clicks for the next question
    //move on to the next question if not the last question
    const nextQuestion=num+1;
    if(nextQuestion===TOTAL_QUESTIONS){
      setGameOver(true);
    } else{
      setNum(nextQuestion);
    }
  }
  
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || (userAnswers.length === TOTAL_QUESTIONS) ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
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
      </Wrapper>
    </>
  );
}

export default App;
