import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../styles/question.module.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '42%',
    height: "inherit",
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: 24,
    outline: 'none',
    padding: "25px 0 0 0"
};

const Question = ({ openQ, handleCloseQ }) => {

    const [ques, setQues] = useState("")

    const handleAddQues = () => {
        console.log('ques:', ques)
    }

    return (
        <div>
            <Modal
                open={openQ}
                onClose={handleCloseQ}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <p className={styles.add_ques}>Add question</p>
                    <div className={styles.terms}>
                        <h4>Tips on getting good answers quickly</h4>
                        <ul>
                            <li>Make sure your question has not been asked already</li>
                            <li>Keep your question short and to the point</li>
                            <li>Double-check grammar and spelling</li>
                        </ul>
                    </div>

                    <div className={styles.ques_div}>
                        <p>Mohd Tausif asked</p>
                        <input type="text" placeholder="Start your question with 'What', 'How', 'Why' etc." onChange={e => setQues(e.target.value)} />
                    </div>
                    <hr style={{ color: '#c5c9c9', marginTop: "146px", backgroundColor: "#c5c9c9" }} />
                    <div className={styles.ques_btn}>
                        <button onClick={handleCloseQ}>Close</button>
                        <button onClick={handleAddQues}>Add question</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Question
