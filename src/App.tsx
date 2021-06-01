import React, { useState } from "react";
import { Difficulty, fetchQuizQuestions, QuestionState } from "./API";

const TOTAL_QUESTION = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz With TypeScript</h1>

      <button className="start" onClick={startTrivia}>
        Start
      </button>

      <p className="score">Score: </p>
      <p>Loading Question</p>

      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
