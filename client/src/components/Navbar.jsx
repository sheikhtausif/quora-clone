import React from 'react'
import styles from '../styles/navbar.module.css'
import Logo from '../svg/Logo'
import Home from '../svg/Home'
import Following from '../svg/Following'
import Answer from '../svg/Answer'
import Space from '../svg/Space'
import Notification from '../svg/Notification'
import Search from '../svg/Search'
import Language from '../svg/Language'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav className={styles.nav_flex}>
                <div className={styles.left}>
                    <div className={styles.icons}>
                        <Logo />
                    </div>
                    <div className={styles.icons}>
                        <Home />
                        {/* <small>Home</small> */}
                    </div>
                    <div className={styles.icons}>
                        <Following />
                        {/* <small>Home</small> */}
                    </div>
                    <div className={styles.icons}>
                        <Answer />
                        {/* <small>Answer</small> */}
                    </div>
                    <div className={styles.icons}>
                        <Space />
                        {/* <small>Space</small> */}
                    </div>
                    <div className={styles.icons}>
                        <Notification />
                        {/* <small>Notification</small> */}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.inp_box}>
                        <div>
                            <Search />
                            <input type="text" placeholder="Search Quora" />
                        </div>
                    </div>
                    <div className={styles.user_circle}>T</div>
                    <span><Language /></span>
                    <div className={styles.add_ques}>Add question</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
