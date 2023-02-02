import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ResultPage from './components/ResultPage';
import { callQuestions, QuestionState  } from './Data';
import { GlobalStyle, Bg, Wrapper, MainButton } from './App.styles';

export interface AnswerObject{
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [num, setNum] = useState(0);
  const [clickedAnswer, setClickedAnswer] = useState<AnswerObject[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showFinishBtn, setShowFinishBtn] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [replay, setReplay] = useState(false);

  const callData = async() => {
    setLoading(true);
    const newQuestions = await callQuestions(TOTAL_QUESTIONS);
    setQuestions(newQuestions);
    setNum(0);
    setClickedAnswer([]);
    setUserAnswers([]);
    setScore(0);
    setGameOver(false);
    setIsCorrect(false);
    setClicked(false);
    setShowFinishBtn(false);
    setShowResult(false);
    setReplay(false);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      setClicked(true);
      const answer = e.currentTarget.value;
      const correct = questions[num].correct_answer === answer;
      if(correct){
        setIsCorrect(prev => true);
      } else{
        setIsCorrect(prev => false);
      }
      const answerObject = {
        question: questions[num].question,
        answer,
        correct,
        correctAnswer: questions[num].correct_answer
      }
      setClickedAnswer(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    setUserAnswers(prev => [...prev, clickedAnswer[clickedAnswer.length - 1]]);
    const nextQuestion=num+1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } else{
      setNum(nextQuestion);
    }
    if(isCorrect) setScore(prev => prev+10);
    if(nextQuestion === TOTAL_QUESTIONS - 1){ setShowFinishBtn(true); }
    setClicked(false);
    setClickedAnswer([]);
  }

  const handlePlayAgain = () => {
    setQuestions([]);
    setNum(0);
    setUserAnswers([]);
    setScore(0);  
    setGameOver(true);
    setShowFinishBtn(false);
    setShowResult(false);
    setReplay(true);
  }

  return (
    <>
      <GlobalStyle />
      <Bg>
        <div className="bg bg1"></div>
        <div className="bg bg2"></div>
        <Wrapper>
          {showResult && !replay ?
            <ResultPage finalScore={score} callback={handlePlayAgain} answerList={userAnswers} /> : (
            <>
              {!showFinishBtn && (gameOver || (userAnswers.length === TOTAL_QUESTIONS)) ? (
                <>
                  <h1>맞춤법 시험</h1>
                  <p className="text">나의 한글 맞춤법 실력은 과연! 지금 바로 시험을 시작해보세요</p>
                  <MainButton className="start" onClick={callData}>시험시작</MainButton>
                </>
              ) : null}
              {!loading && !gameOver && (
                <>
                  <QuestionCard
                    questionNum={num + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[num].question}
                    answers={questions[num].answers}
                    clickedAnswer={clickedAnswer ? clickedAnswer[clickedAnswer.length - 1] : undefined}
                    userAnswer={userAnswers ? userAnswers[num] : undefined}
                    callback={checkAnswer}
                  />
                </>
              )}
              {!gameOver && !loading && clicked && num !== (TOTAL_QUESTIONS - 1) ? (
                <MainButton className="next" onClick={nextQuestion}>
                  <span>다</span><span>음</span><span>으</span><span>로</span>
                </MainButton>
              ) : null}
              {!gameOver && !loading && clicked && showFinishBtn ? (
                <MainButton className="finish" onClick={()=>{
                  nextQuestion();
                  setShowResult(true);
                }}>
                  <span>결과보기</span>
                </MainButton>
              ) : null}
            </>
          )}
        </Wrapper>
      </Bg>
    </>
  );
}

export default App;