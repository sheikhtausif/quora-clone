import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import styles from "../styles/card.module.css";
import Paper from "@mui/material/Paper";
import Upvote from "../svg/Upvote";
import Downvote from "../svg/Downvote";
import Share from "../svg/Share";
import Comments from "../svg/Comments";
import ShareIcon from "../svg/Share_icon";
import DottedIcon from "../svg/Dotted_icon";
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../ReduxStore/App/actions'

const Following = () => {

    const [current_user, setCurrentUser] = useState(null);

    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.app)

    const [allPost, setAllPost] = useState(posts.reverse(function (a,b){return a-b}))


    useEffect(() => {
        dispatch(getPost())
        setAllPost(posts.reverse(function (a,b){return a-b}))

        setCurrentUser(JSON.parse(localStorage.getItem('user')))
    }, [dispatch, posts])

    const [data, setData] = useState([]);



    const likePost = (id) => {
        //console.log('id:', id)
        fetch('http://localhost:8000/posts/upvote', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
          .then(result => {
                const newData = posts.map(item => {
                  if (item._id === result._id) {
                        return result
                  } else {
                     console.log(item)
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log('err:', err)

            })
    }
    const unlikePost = (id) => {
        fetch('http://localhost:8000/posts/downvote', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {        
                const newData = posts.map(item => {
                  if (item._id === result._id) {
                       console.log(result)
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log('err:', err)
            })
    }
    // eslint-disable-next-line
    const makeComment = (text, postId) => {
        fetch('http://localhost:8000/posts/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                //console.log(result)
                const newData = data.map(item => {
                    if (item._id === result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log('err:', err)

            })
  }
  const main_paper_card = {
      marginBottom: "5px",
    }


    return (
       <div style={{width: '38%',margin: "auto"}}>
        <div className={styles.main_card_container}>
                {allPost?.map((el, i) => {
                    return (
                      <div key={i}>
                        <Paper variant="outlined" square sx={main_paper_card}>
                            <div className={styles.secondary_card_container}>
                                <div className={styles.user_main_intro}>
                                    <div>
                                        <img
                                            className={styles.main_image}
                                            height="50"
                                            width="50"
                                            src={el?.postedBy?.pic ? el.postedBy.pic : current_user.pic}
                                            alt="profileimg"
                                        />
                                    </div>

                                    <div>
                                        <div className={styles.user_intro}>
                                            <h4>{el?.postedBy?.name ? el.postedBy.name : current_user.name}</h4>
                                            <Link to="#"></Link>
                                        </div>

                                        <div className={styles.user_about_date}>
                                            {/* <p>{el.about}</p>
                                            <p>{el.date.toString().slice(0, 15)}</p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.answer}>
                                    <h3>{el.title}</h3>
                                    <div>
                                        <p>{el.body}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <img
                                            className={styles.post_images}
                                            src={el.photo}
                                            alt="images"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.all_icons}>
                                <div className={styles.cardlast_section}>
                                    <div className={styles.vote}>
                                        <button className={styles.button_upvoted} onClick={() => {
                                            likePost(el._id);
                                        }}>
                                            <Upvote />
                                            <p>12.4k</p>
                                        </button>

                                        <button className={styles.button_voted}
                                            onClick={() => {
                                                unlikePost(el._id);
                                            }}>
                                            <Downvote />
                                        </button>
                                    </div>

                                    <div className={styles.share}>
                                        <button className={styles.button_upvoted}>
                                            <Share />
                                            <p>78</p>
                                        </button>
                                    </div>

                                    <div className={styles.comments}>
                                        <button className={styles.button_upvoted}>
                                            <Comments />
                                            <p>68</p>
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.dotted_share}>
                                    <div className={styles.comments}>
                                        <button className={styles.button_voted}>
                                            <ShareIcon />
                                        </button>
                                    </div>
                                    <div className={styles.comments}>
                                        <button className={styles.button_voted}>
                                            <DottedIcon />
                                        </button>
                                    </div>
                                </div>
                                
                            </div>

                         </Paper>
                        </div>
                    );
                })}

            </div>
            </div>
    );
};

export default Following;

