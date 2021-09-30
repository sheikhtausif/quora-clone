
import React from 'react'
import styles from "../styles/main.module.css"
import Left from './Left'
import Card from './Card';
import Right from './Right';
const Main = () => {
    return (
        <div className={styles.main_part}>
            
            <div style={{width:"15%"}}>
              <Left/>
            </div>

            <div style={{width:"52%"}}>
                <Card/>
            </div>

            <div style={{width:"23%"}}>
                <Right/>
            </div>
             
        </div>
    )
}

export default Main
