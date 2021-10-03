import React from "react";
import styles from "../styles/right.module.css";
import Paper from "@mui/material/Paper";

const paper_style = {
  height: "auto",
  width: "100%",
 

};
const Right = () => {
    const data = [
        {
            name: "English words",
            image:
                "https://images.all-free-download.com/images/graphiclarge/canoe_water_nature_221611.jpg",
            description: "A platform where get a new english word to learn daily",
        },

        {
            name: "Stock Trading",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_BkwTwYrGcgURQuPN1cB-yhMG12TrDilfFsRvGH_z_FN4mKdmn0i3nJ1FHRKfqtrBOo&usqp=CAU",
            description: "A platform where get a new english word to learn daily",
        },
        {
            name: "Financial Markets",
            image:
                "https://i.pinimg.com/originals/86/86/31/86863191bb49b2d900a630d0c5bebc7e.jpg",
            description: "A platform where get a new english word to learn daily",
        },
        {
            name: "Communication Skills",
            image:
                "https://wallpapercrafter.com/desktop/124159-digital-art-artwork-illustration-pixel-art-pixels-pixelated-landscape-nature-evening-dusk-night-Moon-moon-rays-flowers-trees-oriental-Asian-architecture-Asian-torii-ci.jpg",
            description: "A platform where get a new english word to learn daily",
        },
        {
            name: "Young Entrepreneurs",
            image:
                "https://wallpapershome.com/images/pages/pic_h/16532.jpeg",
            description: "A platform where get a new english word to learn daily",
        },
        {
            name: "Exercise & Fitness",
            image:
                "https://images.all-free-download.com/images/graphicthumb/nature_sauvage_552926.jpg",
            description: "A platform where get a new english word to learn daily",
        },
        {
            name: "UPSC preparation",
            image:
                "http://1.bp.blogspot.com/-6PYPT11obnA/Tlc9KFGj1HI/AAAAAAAAFUc/5I_IeithKZ8/s400/Latest-Nature.jpg",
            description: "A platform where get a new english word to learn daily",
        },
    ];
    return (
        <Paper sx={paper_style} variant="outlined">
            <h4 className={styles.first_line}>Spaces to follow</h4>

            <span className={styles.lines}></span>
            {data.map((el, i) => {
                return (
                    <div key={i}>
                        <span className={styles.lines_2}></span>
                        <div className={styles.spaces_main}>
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
                    </div>
                );
            })}
        </Paper>
    );
};

export default Right;
