import React from 'react'
import { useState } from 'react'
import styles from '../styles/profile.module.css'

const Profile = () => {
    const [profile, setProfile] = useState(true)
    const [ques, setQues] = useState(false)
    const [ans, setAns] = useState(false)
    const [post, setPost] = useState(false)

    const handleActivePro = () => {
        setProfile(true)
        setQues(false)
        setAns(false)
        setPost(false)
    }
    const handleActiveAns = () => {
        setProfile(false)
        setQues(false)
        setAns(true)
        setPost(false)
    }
    const handleActiveQue = () => {
        setProfile(false)
        setQues(true)
        setAns(false)
        setPost(false)
    }
    const handleActivePost = () => {
        setProfile(false)
        setQues(false)
        setAns(false)
        setPost(true)
    }

    return (
        <div className={styles.main_part}>
            <div className={styles.main_profile}>
                <div className={styles.profile_img}>
                    <span>T</span>
                </div>
                <div>
                    <h1>Mohd Tausif</h1>
                    <div>
                        <p>0 followers</p>
                        <p>0 following</p>
                    </div>
                </div>
            </div>
            <div className={styles.profile_details}>
                <p onClick={handleActivePro} style={profile ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>Profile</p>
                <p onClick={handleActiveQue} style={ques ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>0 Questions</p>
                <p onClick={handleActiveAns} style={ans ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>0 Answers</p>
                <p onClick={handleActivePost} style={post ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>0 Posts</p>
            </div>
            <hr />
            <h5>Profile</h5>
            <hr />
            <div className={styles.activity_div}>
                <div>
                    <img className={styles} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="images"></img>
                    <p>You haven't shared, answered or posted anything yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
