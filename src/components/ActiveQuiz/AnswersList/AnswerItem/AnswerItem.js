import React from 'react'
import './AnswerItem.css'

const AnswerItem = props => {

    const clz = ['AnswerItem']

    if(props.state) {
        clz.push(props.state)
    }

    return(
        <li
            className = {clz.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem