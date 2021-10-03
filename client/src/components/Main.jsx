
import React from 'react'
import styles from "../styles/main.module.css"
import Left from './Left'
import Card from './Card';
import Right from './Right';
import Middle from "./Middle"
import Second_middle from "./Second_middle"
import CreatePost from './CreatePost';
import { height } from '@mui/system';
const Main = () => {
    return (
        <div className={styles.main_part}> 
            <div style={{width:"15%"}}>
              <Left/>
            </div>

            <div style={{width:"60%"}}>
                <Middle/>
                <Second_middle/>
                <Card/>
            </div>

            <div style={{width:"22%"}}>
                <Right/>
            </div> 

            {/* 
            <CreatePost/>      */}
        </div>
    )
}

export default Main
