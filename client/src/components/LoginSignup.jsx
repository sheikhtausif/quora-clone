import styles from "../styles/login.module.css";
import React, { useState, } from "react";
// import {  useEffect } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import ClearIcon from "@mui/icons-material/Clear";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from 'react-redux'
import { login, signup } from '../ReduxStore/Auth/actions'
import swal from 'sweetalert'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";



const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(37, 45, 41, 0.9);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 550,
    backgroundColor: "white",
    border: "2px solid white",
    borderRadius: "6px",
    p: 2,
    px: 4,
    pb: 3,
};

export default function Front() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory();

    const { isAuth } = useSelector(state => state.auth)
    if (isAuth) history.push('/')

    //login fields
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // signup fields
    const [name2, setName2] = useState("");
    const [email2, setEmail2] = useState("");
    const [password2, setPassword2] = useState("");

    // eslint-disable-next-line
    const [image, setImage] = useState("");
    // eslint-disable-next-line
    const [url, setUrl] = useState(undefined);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogin = () => {
        const payload = { email: email, password: password }

        if (password && email) dispatch(login(payload))
        else {
            swal({
                title: "Please fill all the fields!",
                icon: "info",
                button: "Ok",
            });
        }
    };
    const handleSignup = () => {
        const payload = { name: name2, password: password2, email: email2 }
        if (name2 && password2 && email2) dispatch(signup(payload))
        else {
            swal({
                title: "Please fill all the fields!",
                icon: "info",
                button: "Ok",
            });
        }
    };

    // eslint-disable-next-line
    const uploadPic = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "miniinsta");
        data.append("cloud_name", "rsbrsb");
        fetch("	https://api.cloudinary.com/v1_1/rsbrsb/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setUrl(data.url);
            })
            .catch((err) => {
                console.log("err:", err);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.container1stdiv}>
                <div className={styles.container1stdiv1stDiv}>
                    <img
                        src="https://qph.fs.quoracdn.net/main-qimg-ef72851415469d38c90bf2f25427e116"
                        alt="done" />
                    <h4>A place to share knowledge and better understand the world</h4>
                </div>

                <div className={styles.container1stdiv2ndDiv}>
                    <div className={styles.container1stdiv2ndDiv1stDiv}>
                        <div
                            className={styles.googleDiv}>
                            <FcGoogle style={{ fontSize: "23px" }} />
                            <h4 style={{ fontWeight: "lighter" }}>Continue with Google</h4>
                        </div>

                        <div
                            style={{ marginTop: "10px", }}
                            className={styles.googleDiv}>
                            <SiFacebook style={{ fontSize: "23px", color: "#0B82ED" }} />
                            <h4 style={{ fontWeight: "lighter" }}>Continue with Facebook</h4>
                        </div>
                        <button
                            onClick={handleOpen}
                            className={styles.emailbutton}>
                            Sign up with email
                        </button>
                        <div style={{ height: "1px", backgroundColor: "#E6E7E8" }}></div>
                        <h5
                            style={{ color: "grey", marginTop: "8px", fontWeight: "normal" }}>
                            By continuing you indicate that you agree to Quora’s Terms of
                            Service and Privacy Policy.
                        </h5>
                    </div>
                    <div className={styles.container1stdiv2ndDiv2ndDiv}></div>
                    <div className={styles.container1stdiv2ndDiv3rdDiv}>
                        <h4 style={{ fontWeight: "normal" }}>Login</h4>
                        <div
                            style={{
                                height: "1px",
                                backgroundColor: "#E6E7E8",
                                marginTop: "10px",
                            }}>
                        </div>
                        <div style={{ marginTop: "18px" }}>
                            <p className={styles.inputsLabel}>Email</p>
                            <input
                                className={styles.inputdiv}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                placeholder="Your Email"
                            />
                            <p className={styles.inputsLabel}>Password</p>
                            <input
                                className={styles.inputdiv}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); }}
                                type="password"
                                placeholder="Your Password"
                            />
                        </div>
                        <div className={styles.loginDiv}>
                            <h5 style={{ color: "grey", fontWeight: "normal" }}>
                                Forgot password?
                            </h5>
                            <button type="submit" onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        height: "1px",
                        backgroundColor: "#E6E7E8",
                        marginTop: "10px",
                    }}
                ></div>
                <div className={styles.bottomDiv1}>
                    <p>
                        हिन्दी <RiArrowRightSLine />
                    </p>
                </div>
                <div className={styles.bottomDiv2}>
                    <h5>
                        About . Careers . Privacy . Terms . Contact . Languages . Your Ad
                        Choices . Press© Quora, Inc. 2021
                    </h5>
                </div>
            </div>

            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}>
                <Box sx={style}>
                    <ClearIcon
                        className={styles.boxCloseIcon}
                        onClick={handleClose} />
                    <div className={styles.modelDiv}>
                        <h3 style={{ marginBottom: "20px", marginTop: "5px" }}>Sign up</h3>
                        <h5>Name</h5>
                        <input
                            type="text"
                            value={name2}
                            onChange={(e) => setName2(e.target.value)}
                            placeholder="What would you liked to be called ?"
                        />
                        <h5>Email</h5>
                        <input
                            type="text"
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                            placeholder="Your email"
                        />
                        <h5>Password</h5>
                        <input
                            type="password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder="Your Password"
                        />
                    </div>
                    <div className={styles.modelBorderDiv}></div>

                    <button
                        onClick={handleSignup}
                        className={styles.modelButton}>
                        Sign up
                    </button>
                </Box>
            </StyledModal>
        </div>
    );
}
