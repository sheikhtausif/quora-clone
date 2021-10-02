
import React from 'react'
import styles from "../styles/main.module.css"
import Left from './Left'
import Card from './Card';
import Right from './Right';
import Middle from "./Middle"
import SecondMiddle from "./Second_middle"
// import CreatePost from './CreatePost';
const Main = () => {
    return (
        <div className={styles.main_part}>
            <div style={{ width: "18%" }}>
                <Left />
            </div>

            <div style={{ width: "55%" }}>
                <Middle />
                <SecondMiddle />
                <Card />
            </div>

            <div style={{ width: "21%" }}>
                <Right />
            </div>

            {/* 
            <CreatePost/>      */}
        </div>
    )
}

export default Main
