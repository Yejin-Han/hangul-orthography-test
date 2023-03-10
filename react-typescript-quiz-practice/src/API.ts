/* fetching data from api */
import { shuffleArray } from "./utils";

export interface Question{
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState=Question & { answers: string[] };

// enum : 열거형(여러 값들에 미리 이름을 정의하여 열거해두고 사용하는 타입)
export enum Difficulty{
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions=async(amount: number, difficulty: Difficulty)=>{
  const endpoint=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data=await(await fetch(endpoint)).json(); //first, we await the fetch itself and then we're gonna wait when we convert it to json
  return data.results.map((question: Question)=>(
    {
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
    }
  ));
};