import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz () {
    const [ userAnswers, setUserAnswers ] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleAnswerSelection (currentSelectedAnswer) {
        setUserAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, currentSelectedAnswer];
        });
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