import React, { useContext, useState } from "react";
import { useHistory, Link } from 'react-router-dom'
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
import Question from './Question'
import { UserContext } from '../App'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Active, NoActive } from '../styles/ActiveStyled'

const Navbar = ({ handleTheme }) => {
    const [open, setOpen] = useState(false);
    const [openQ, setOpenQ] = useState(false);
    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const { pathname } = history.location
    

    const handleOpenQ = () => setOpenQ(true);
    const handleCloseQ = () => setOpenQ(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleProfile = () => {
        setOpen(false)
        history.push('/profile')
    }

    const nav = [
        { icon: <Home />, text: "Home", to: '/' },
        { icon: <Following />, text: "Following", to: "/following" },
        { icon: <Answer />, text: "Answers", to: '/answer' },
        { icon: <Space />, text: "Space", to: '/spaces' },
        { icon: <Notification />, text: "Notifications", to: '/notifications' },
    ]
    const profile_details = [
        { icon: <Message />, text: "Message" },
        { icon: <Ad />, text: "Create Ad" },
        { icon: <Dollar />, text: "Monetization" },
        { icon: <State />, text: "Your content & state" },
        { icon: <Bookmark />, text: "Bookmarks" },
        { icon: <Draft />, text: "Drafts" },
    ]
    const user=JSON.parse(localStorage.getItem("user"))
    const userFName=(user?user.name:"UK").split("")
    const body = (
        <div className={styles.modal_body}>
            <div className={styles.profile_div}>
                <div className={styles.profile_img}>{userFName[0]}</div>
                <div onClick={handleProfile}>
                    <h3>{user?user.name:"UK"}</h3>
                    <GrNext />
                </div>
            </div>
            <hr style={{ color: '#F1F2F2' }} />
            <div>
                {profile_details.map((el, i) => (
                    <div key={i} className={styles.profile_details}>
                        {el.icon}
                        <p>{el.text}</p>
                    </div>
                ))}
            </div>
            <hr style={{ color: '#F1F2F2' }} />
            <div>
                <div className={styles.theme}>
                    <p>Dark mode</p>
                    <p className={styles.toggle_theme} onClick={handleTheme}>OFF</p>
                </div>
                <p>Settings</p>
                <p>Languages</p>
                <p>Help</p>
                <p onClick={() => {
                    localStorage.clear()
                    dispatch({ type: "CLEAR" })
                    history.push('/register')
                }}>Logout</p>
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
        </div >
    );

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />))
        (() => ({
            [`& .${tooltipClasses.tooltip}`]: {
                backgroundColor: '#fff',
                color: 'rgba(63, 60, 60, 0.87)',
                fontSize: 11,
                borderRadius: "20px",
                padding: '6px 14px',
                border: '0.5px solid rgba(87, 79, 79, 0.87)',
                outline: 'none',
            },
        }));

    return (
        <>
            <div className={styles.navbar}>
                <nav className={styles.nav_flex}>
                    <div className={styles.left}>
                        <Link to='/'><Logo /></Link>
                        {nav.map((el, i) => (
                            <LightTooltip key={i} title={el.text}>
                                {pathname === `${el.to}` ? <Active><Link to={el.to}>{el.icon}</Link></Active> : <NoActive><Link to={el.to}>{el.icon}</Link></NoActive>}
                            </LightTooltip>
                        ))}
                    </div>
                    <div className={styles.right}>
                        <div className={styles.inp_box}>
                            <div>
                                <Search />
                                <input type="text" placeholder="Search Quora" />
                            </div>
                        </div>
                        <div className={styles.user_circle} onClick={handleOpen}>{userFName[0]}</div>
                        <span><Language /></span>
                        <div className={styles.add_ques} onClick={handleOpenQ}>Add question</div>
                    </div>
                </nav>
            </div >
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}
                </Modal>
            </div>
            <div>
                <Question openQ={openQ} handleCloseQ={handleCloseQ} />
            </div>
        </>
    )
}

export default Navbar
