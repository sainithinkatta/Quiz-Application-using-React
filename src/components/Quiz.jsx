import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';

export default function Quiz () {
    const [ userAnswers, setUserAnswers ] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    function handleAnswerSelection (currentSelectedAnswer) {
        setUserAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, currentSelectedAnswer];
        });
    }
    
    if (isQuizComplete) {
        return (
            <div id="summary">
                <img 
                    src={quizComplete} 
                    alt="Quiz Completed"
                />

                <h2>Quiz Completed</h2>
            </div>
        )
    }

    return (
       <div id="quiz">
            <div id="question">
                <h2> { QUESTIONS[activeQuestionIndex].text } </h2>

                <ul 
                    id="answers" 
                    className='answer'
                >
                    {
                        QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
                            <li key={index}>
                                <button 
                                    onClick={() => {
                                        handleAnswerSelection(answer)
                                    }}
                                >
                                    { answer }
                                </button>
                            </li>
                        )) 
                    }
                </ul>
            </div>
       </div>
    )
}