/* calling data.json */
import axios from 'axios';

export interface Question{
  question: string;
  correct_answer: string;
  incorrect_answer: string; 
}
export type QuestionState = Question & { answers: string[] };

/* randomize answers to the questions */
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => (Math.random()-0.5));
}

export const callQuestions = async(amount: number) => {
  const Data = await axios.get('./data/data.json');
  return Data.data.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([question.correct_answer, question.incorrect_answer]),
    }
  ));
};