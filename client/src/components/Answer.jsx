import React from 'react'
import styles from "../styles/answers.module.css"


const Answer = () => {
    return (
        <div>
            <div>
                <div className={styles.main_part}>
                    <h5>Answers</h5>
                    <hr />
                    <div className={styles.answers}>
                        <div>
                            <img className={styles} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="images"></img>
                            <p>You haven't any answers yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Answer
