import React from 'react'
import './FinishedQuiz.css'

const FinishedQuiz = props => {
    return(
        <div className='FinishedQuiz'>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes
                    ]
                    
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {question}
                            <i classname={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz