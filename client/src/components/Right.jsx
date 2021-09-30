import React from "react";
import styles from "../styles/right.module.css";
import Paper from "@mui/material/Paper";
const Right = () => {
  const data = [
    {
      name: "English words",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      description: "A platform where get a new english word to learn daily",
    },

    {
      name: "English words",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      description: "A platform where get a new english word to learn daily",
    },
    {
      name: "English words",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      description: "A platform where get a new english word to learn daily",
    },
    {
      name: "English words",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      description: "A platform where get a new english word to learn daily",
    },
    {
      name: "English words",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      description: "A platform where get a new english word to learn daily",
    },
    {
      name: "English words",
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      description: "A platform where get a new english word to learn daily",
    },
  ];
  return (
    <Paper
      className={styles.right_side_spaces}
      variant="outlined"
      elevation={8}
    >
      <div>
        <h4 className={styles.first_line}>Spaces to follow</h4>
        <hr className={styles.first_hr} />

        {data.map((el, i) => {
          return (
            <>
              <div className={styles.space_main}>
                <div>
                  <img
                    className={styles.space_image}
                    height="30"
                    width="30"
                    src={el.image}
                    alt="space_image"
                  />
                </div>

                <div className={styles.space_des}>
                  <h5>{el.name}</h5>
                  <p className={styles.space_para}>{el.description}</p>
                </div>
              </div>

              <hr className={styles.space_line} />
            </>
          );
        })}
      </div>
    </Paper>
  );
};

export default Right;
