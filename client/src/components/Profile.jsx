import React from 'react'
import { useState,useEffect } from 'react'
import styles from '../styles/profile.module.css'
import styled from "../styles/card.module.css";
import Modal from '@material-ui/core/Modal';
import Box from '@mui/material/Box';
import { GrClose } from 'react-icons/gr';

const Profile = () => {
    const [profileA, setProfileA] = useState(true)
    const [quesA, setQuesA] = useState(false)
    const [ansA, setAnsA] = useState(false)
    const [postA, setPostA] = useState(false)
    const [followingA, setFollowingA] = useState(false)
    const [followersA, setFollowersA] = useState(false)
    const [followText, setFollowText] = useState("")
    const [profileText, setProfileText] = useState("Profile")
      const [mypics,setPics]=useState([])
     

     useEffect(()=>{
       fetch('http://localhost:8000/posts/myposts',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           setPics(result.posts)
       })
    }, [mypics])

    const [open, setOpen] = useState(false);
    const handleOpen = (text) => {
        setOpen(true)
        if (text === "Following") {
            setFollowingA(true)
            setFollowText(text)
        }
        else {
            setFollowersA(true)
            setFollowText(text)
        }
    }
    const handleClose = () => {
        setOpen(false)
        setFollowersA(false)
        setFollowingA(false)
    };

    const handleActivePro = (text) => {
        setProfileA(true)
        setQuesA(false)
        setAnsA(false)
        setPostA(false)
        setProfileText(text)
    }
    const handleActiveAns = (text) => {
        setProfileA(false)
        setQuesA(false)
        setAnsA(true)
        setPostA(false)
        setProfileText(text)
    }
    const handleActiveQue = (text) => {
        setProfileA(false)
        setQuesA(true)
        setAnsA(false)
        setPostA(false)
        setProfileText(text)
    }
    const handleActivePost = (text) => {
        setProfileA(false)
        setQuesA(false)
        setAnsA(false)
        setPostA(true)
        setProfileText(text)
    }

    const handleActiveFollowers = (text) => {
        setFollowingA(true)
        setFollowersA(false)
        setFollowText(text)
    }
    const handleActiveFollowing = (text) => {
        setFollowingA(false)
        setFollowersA(true)
        setFollowText(text)
    }

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '42%',
        height: "inherit",
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: 24,
        outline: 'none',
        padding: "20px"
    };
     const user=JSON.parse(localStorage.getItem("user"))
    const userFName=(user.name).split("")
    console.log('userFName:', userFName)

    // let following = Math.floor(Math.random() * 100);
    // let followers = Math.floor(Math.random() * 100);

    return (
        <>
            <div className={styles.main_part}>
                <div className={styles.main_profile}>
                    <div className={styles.profile_img}>
                        <span>{userFName[0]}</span>
                    </div>
                    <div>
                        <h1>{user.name}</h1>
                        <div>
                            <p style={{marginRight:"30px"}} onClick={() => handleOpen('Followers')}>12 followers</p>
                            <p onClick={() => handleOpen('Following')}>7 following</p>
                        </div>
                    </div>
                </div>
                <div className={styles.profile_details}>
                    <p onClick={() => handleActivePro("Profile")} style={profileA ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>Profile</p>
                    <p onClick={() => handleActiveQue("Questions")} style={quesA ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>0 Questions</p>
                    <p onClick={() => handleActiveAns("Answers")} style={ansA ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>0 Answers</p>
                    <p onClick={() => handleActivePost("Posts")} style={postA ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>0 Posts</p>
                </div>
                <hr />
                <h5>{profileText}</h5>
                <hr/>
                <div  >
               {
                   mypics.map((item,i)=>{
                       return(
                           <div style={{marginTop:"10px"}} key={i}>
                               <h3>{item.title}</h3>
                               <p>{item.body}</p>
                            <img className={styled.post_images} src={item.photo} alt="images" />
                        </div>  
                       )
                   })
               }
            </div>
                <div className={styles.activity_div}>
                    <div>
                        <img className={styles} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="images"></img>
                        <p>You haven't shared, answered or posted anything yet.</p>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className={styles.close}>
                        <GrClose onClick={handleClose} />
                        <p>{user.name}</p>
                    </div>
                    <div className={styles.follow_details}>
                        <p onClick={() => handleActiveFollowing("Followers")} style={followersA ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>12 Followers</p>
                        <p onClick={() => handleActiveFollowers("Following")} style={followingA ? { borderBottom: '3.4px solid #A82723' } : { borderBottom: '3.4px solid #fff' }}>7 Following</p>
                    </div>
                    <hr />
                    <h5>{followText}</h5>
                    <hr />
                    <div className={styles.activity_div}>
                        <div>
                            <img className={styles} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="images"></img>
                            <p>{followersA ? "You don't have followers yet" : "You aren't following anyone yet."}</p>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Profile
