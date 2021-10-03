import React from 'react'
import { useEffect } from 'react'
import styles from "../styles/answers.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getQuestion } from '../ReduxStore/App/actions'
import AnswerQ from '../svg/AnswerQ'
import StarQ from '../svg/StarQ'

const Answer = () => {

    const dispatch = useDispatch();
    const { questions } = useSelector(state => state.app)
    console.log('questions:', questions)

    useEffect(() => {
        dispatch(getQuestion())
    }, [dispatch])

    return (
        <div>
            <div className={styles.main_part}>
                <div className={styles.ques}>
                    <StarQ />
                    <p>Question for you</p>
                </div>
                <hr />
                {questions ?
                    <div>
                        {questions.map((el, i) => (
                            <div key={i}>
                                <div className={styles.answers}>
                                    <h2>{el.question}</h2>
                                    <h4>No answer yet</h4>
                                    <div className={styles.ans}>
                                        <AnswerQ />
                                        <p>Answer</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    : <div >
                        <div className={styles.answers_img}>
                            <img className={styles} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="images"></img>
                            <p>You haven't any answers yet.</p>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Answer
