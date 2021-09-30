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
import Message from '../svg/Message'
import Ad from '../svg/Ad'
import Dollar from '../svg/Dollar'
import State from '../svg/State'
import Bookmark from '../svg/Bookmark'
import Draft from '../svg/Draft'
import Modal from '@material-ui/core/Modal';
import { GrNext } from 'react-icons/gr';

const Navbar = ({ handleTheme }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const nav = [
        { icon: <Logo />, text: "" },
        { icon: <Home />, text: "Home" },
        { icon: <Following />, text: "Followings" },
        { icon: <Answer />, text: "Answers" },
        { icon: <Space />, text: "Space" },
        { icon: <Notification />, text: "Notifications" },
    ]
    const profile_details = [
        { icon: <Message />, text: "Message" },
        { icon: <Ad />, text: "Create Ad" },
        { icon: <Dollar />, text: "Monetization" },
        { icon: <State />, text: "Your content & state" },
        { icon: <Bookmark />, text: "Bookmarks" },
        { icon: <Draft />, text: "Drafts" },
    ]

    const body = (
        <div className={styles.modal_body}>
            <div className={styles.profile_div}>
                <div className={styles.profile_img}>T</div>
                <div>
                    <h3>Mohd Tausif</h3>
                    <GrNext />
                </div>
            </div>
            <hr style={{ color: 'grey' }} />
            <div>
                {profile_details.map((el, i) => (
                    <div key={i} className={styles.profile_details}>
                        {el.icon}
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>
            <hr style={{ color: 'grey' }} />
            <div>
                <div className={styles.theme}>
                    <p>Dark mode</p>
                    <p className={styles.toggle_theme} onClick={handleTheme}>OFF</p>
                </div>
                <p>Settings</p>
                <p>Languages</p>
                <p>Help</p>
                <p>Logout</p>
            </div>
            <div className={styles.footer}>
                <p>About</p>
                <p>Careers</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Acceptable Use</p>
                <p>Business</p>
                <p>Press</p>
                <p>Your Ad Choices</p>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.navbar}>
                <nav className={styles.nav_flex}>
                    <div className={styles.left}>
                        {nav.map((el, i) => (
                            <div key={i} className={styles.icons}>
                                {el.icon}
                            </div>
                        ))}
                    </div>
                    <div className={styles.right}>
                        <div className={styles.inp_box}>
                            <div>
                                <Search />
                                <input type="text" placeholder="Search Quora" />
                            </div>
                        </div>
                        <div className={styles.user_circle} onClick={handleOpen}>T</div>
                        <span><Language /></span>
                        <div className={styles.add_ques}>Add question</div>
                    </div>
                </nav>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}
                </Modal>
            </div>
        </>
    )
}

export default Navbar
