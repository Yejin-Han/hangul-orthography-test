import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ResultPage from './components/ResultPage';
import { callQuestions, QuestionState  } from './Data';
import { GlobalStyle, Bg, Wrapper } from './App.styles';

export interface AnswerObject{
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10;

/* 1. setUserAnswers 수정, userAnswers 잘 들어오는지
* answerObject를 추가하는 것에서 correct와 answer, correctanswer을 활용할 수 있지 않을까?
그럼 useState 남발하지 않고 해결될 것 같은데
-> 이후 클릭했을 때 opacity 바뀌는지 확인
2. finalPage 전면 수정
- next로 넘겨준 값이 correctanswer인지 아닌지 체크하는 배열을 뽑고
- userAnswers를 하나씩 나열한다
- userAnswers가 false이면 incorrect이므로 위에 취소선 그어주고 해당하는 correct answer을 옆에 써준다.
3. 다음으로버튼 같은거 hover letter animation!
*/

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [num, setNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showFinishBtn, setShowFinishBtn] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [replay, setReplay] = useState(false);
  const [isCorrectArr, setIsCorrectArr] = useState<boolean[]>([]);
  let clickedAnswer: AnswerObject[] = [];
  /* userAnswers set 하는거에서 문제가 있음
  결과 페이지에서 틀린거 안틀린거 보여주려면 어떻게 해야할지 고민하기 */

  const callData = async() => {
    setLoading(true);
    const newQuestions = await callQuestions(TOTAL_QUESTIONS);
    setQuestions(newQuestions);
    setNum(0);
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
        setIsCorrect(true);
      } else{
        setIsCorrect(false);
      }
      if((num === TOTAL_QUESTIONS - 1) && correct) setScore(prev => prev+10);
      const answerObject = {
        question: questions[num].question,
        answer,
        correct,
        correctAnswer: questions[num].correct_answer
      }
      clickedAnswer = [...clickedAnswer, answerObject];
      console.log(clickedAnswer);
    }
  }

  const nextQuestion = () => {
    setUserAnswers(prev => [...prev, clickedAnswer[clickedAnswer.length - 1]]);
    const nextQuestion=num+1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
      setIsCorrectArr(prev => [...prev, isCorrect]);
    } else{
      setNum(nextQuestion);
    }
    setIsCorrectArr(prev => [...prev, isCorrect]);
    if(isCorrect) setScore(prev => prev+10);
    if(nextQuestion === TOTAL_QUESTIONS - 1) setShowFinishBtn(true);
    console.log(isCorrectArr);
    console.log(userAnswers);
    setIsCorrect(false);
    setClicked(false);
    clickedAnswer=[];
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
    setIsCorrectArr([]);
  }

  return (
    <>
      <GlobalStyle />
      <Bg>
        <div className="bg bg1"></div>
        <div className="bg bg2"></div>
        <Wrapper>
          {showResult && !replay ? <ResultPage finalScore={score} callback={handlePlayAgain} /> : (
            <>
              {!showFinishBtn && (gameOver || (userAnswers.length === TOTAL_QUESTIONS)) ? (
                <>
                  <h1>맞춤법 시험</h1>
                  <p className="text">나의 한글 맞춤법 실력은 과연! 지금 바로 시험을 시작해보세요</p>
                  <button className="start" onClick={callData}>시험시작</button>
                </>
              ) : null}
              {!loading && !gameOver && (
                <>
                  <QuestionCard
                    questionNum={num + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[num].question}
                    answers={questions[num].answers}
                    userAnswer={userAnswers ? userAnswers[num] : undefined}
                    callback={checkAnswer}
                  />
                </>
              )}
              {!gameOver && !loading && clicked && num !== (TOTAL_QUESTIONS - 1) ? (
                <button className="next" onClick={nextQuestion}>
                  <span>다</span><span>음</span><span>으</span><span>로</span>
                </button>
              ) : null}
              {!gameOver && !loading && clicked && showFinishBtn ? (
                <button className="finish" onClick={()=>{setShowResult(true)}}>
                  <span>결과보기</span>
                </button>
              ) : null}
            </>
          )}
        </Wrapper>
      </Bg>
    </>
  );
}

export default App;