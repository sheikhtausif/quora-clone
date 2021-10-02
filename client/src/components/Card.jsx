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
import Box from "@mui/material/Box";

const Card = () => {
    // const data = [
    //   {
    //     image:
    //       "https://indieseducation.b-cdn.net/wp-content/uploads/2020/05/Full-stack-1.jpg",
    //     name: "Amit",
    //     about: "Enginner",
    //     date: new Date(),
    //     question: "what is fullstack?",
    //     answer:
    //       "Hands down it has to be the supremely brilliant artist S. Elayaraja from Tamil Nadu, India.",
    //     images: "https://cdn.wallpapersafari.com/45/48/zaZuT2.jpg",
    //   },
    // ];
    const paper_card = {
        height: "auto",
    };
    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        fetch("/followingposts", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setData(result.posts);
            });
    }, [])

    const likePost = (id) => {
        fetch('/upvote', {
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
                //   console.log(result)
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
    const unlikePost = (id) => {
        fetch('/downvote', {
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
                //   console.log(result)
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

    const makeComment = (text, postId) => {
        fetch('/comment', {
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
    return (
        <Box
            sx={{
                width: "auto",
                marginBottom: "10px",
            }}
        >
            <Paper variant="outlined" sx={paper_card} square>
                {data.map((el, i) => {
                    return (
                        <div className={styles.secondary_card_container} key={i}>
                            <div className={styles.user_main_intro}>
                                <div>
                                    <img
                                        className={styles.main_image}
                                        height="40"
                                        width="40"
                                        src={el.image}
                                        alt="images"
                                    />
                                </div>

                                <div>
                                    <div className={styles.user_intro}>
                                        <h4>{el.name}</h4>
                                        <Link to='#'>Follow</Link>
                                    </div>

                                    <div className={styles.user_about_date}>
                                        <p>{el.about}</p>
                                        <p>{el.date.toString().slice(0, 15)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.answer}>
                                <h3>{el.question}</h3>
                                <div>
                                    <p>{el.answer}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img
                                        className={styles.post_images}
                                        src={el.images}
                                        alt="images"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={styles.all_icons}>
                    <div className={styles.cardlast_section}>
                        <div className={styles.vote}>
                            <button className={styles.button_upvoted}>
                                <Upvote />
                                <p>12.4k</p>
                            </button>

                            <button className={styles.button_voted}>
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
        </Box>
    );
};

export default Card;
