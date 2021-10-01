import React from "react";
import styles from "../styles/middle.module.css";
import Quoraplus from "../svg/Quoraplus" ;
import Paper from "@mui/material/Paper";

const middle_one={
  marginTop:"10px",
  marginBottom:"10px",
  height: "135px"
}
const Middle = () => {
  return (
    <Paper sx={middle_one} variant="outlined" square>
    <div className={styles.middle_main}>
      <div className={styles.get_more_with_quora}>
        <h5>Get more with Quora+</h5>
      </div>

      <div className={styles.quora_plus}>
        <p>
          Browse ad‑free and access exclusive content from participating
          creators and Spaces.
        </p>
        {/* <img className={styles.quora_plus_image} src="" alt="quora_plus" /> */}
       <div >
           <Quoraplus/>
       </div>
      </div>

      <div>
          <button className={styles.btn_learn_more}>Learn more</button>
      </div>
    </div>
    </Paper>
  );
};

export default Middle;
