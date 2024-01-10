import React, { useState } from 'react'
import Question from './Question'
import quizdata from './data'

import './Home.css'
const Home = () => {
    const [questions,setQuestions] = useState(quizdata)
  return (
    <div>
        <main>
            <div className='container'>
                <h3>Quizz App</h3>
                <section>
                    {questions.map((quizQuestion) => {
                        return <Question key = {quizQuestion.id} {...quizQuestion} />
                    })}
                </section>
            </div>
        </main>
    </div>
  )
}

export default Home