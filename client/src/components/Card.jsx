import React from "react";
import styles from "../styles/card.module.css";
import Paper from "@mui/material/Paper";
import Upvote from "../svg/Upvote";
import Downvote from "../svg/Downvote";
import Share from "../svg/Share";
import Comments from "../svg/Comments";
import Share_icon from "../svg/Share_icon";
import Dotted_icon from "../svg/Dotted_icon";
import { Link } from "react-router-dom";
const Card = () => {
  const data = [
    {
      image:
        "https://indieseducation.b-cdn.net/wp-content/uploads/2020/05/Full-stack-1.jpg",
      name: "Amit",
      about: "Enginner",
      date: new Date(),
      question: "what is fullstack?",
      answer:
        "Hands down it has to be the supremely brilliant artist S. Elayaraja from Tamil Nadu, India.",
      images: "https://cdn.wallpapersafari.com/45/48/zaZuT2.jpg",
    },
  ];

  return (
    <div className={styles.main_card_container}>
      <Paper variant="outlined" square>
        {data.map((el, i) => {
          return (
            <div className={styles.secondary_card_container} key={i}>
              <div className={styles.user_main_intro}>
                <div>
                  <img
                    className={styles.main_image}
                    height="50"
                    width="50"
                    src={el.image}
                    alt="images"
                  />
                </div>

                <div>
                  <div className={styles.user_intro}>
                    <h4>{el.name}</h4>
                    <a href="#">Follow</a>
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
                <Share_icon />
              </button>
            </div>
            <div className={styles.comments}>
              <button className={styles.button_voted}>
                <Dotted_icon />
              </button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Card;
