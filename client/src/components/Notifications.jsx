import React from 'react'
import styles from "../styles/notifications.module.css"

const Notifications = () => {
    return (
        <div className={styles.main_part}>
            <h5>Notifications</h5>
            <hr />
            <div className={styles.notifications}>
                <div>
                    <img className={styles} src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="images"></img>
                    <p>You haven't any notifications yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Notifications
