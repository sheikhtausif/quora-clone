import styles from "../../styles/login.module.css";

import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

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
  const [color, setColor] = useState("white");
  const [color1, setColor1] = useState("white");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sname, setSname] = useState("");
  const [semail, setSemail] = useState("");
  const [spassword, setSpassword] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseEnter = (e) => {
    e.target.style.background = "#f6f6f6";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "white";
  };
  const handleMouseEnter1 = (e) => {
    setColor("#f6f6f6");
  };
  const handleMouseLeave1 = (e) => {
    setColor("white");
  };
  const handleMouseEnter11 = (e) => {
    setColor1("#f6f6f6");
  };
  const handleMouseLeave11 = (e) => {
    setColor1("white");
  };

  const handleLogin = (payload) => {
    console.log(payload);
  };
  const handleSignup = (payload) => {
    console.log(payload);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1stdiv}>
        <div className={styles.container1stdiv1stDiv}>
          <img
            src="https://qph.fs.quoracdn.net/main-qimg-ef72851415469d38c90bf2f25427e116"
            alt="done"
          />
          <h4>A place to share knowledge and better understand the world</h4>
        </div>

        <div className={styles.container1stdiv2ndDiv}>
          <div className={styles.container1stdiv2ndDiv1stDiv}>
            <div
              style={{ backgroundColor: `${color1}` }}
              onMouseEnter={handleMouseEnter11}
              onMouseLeave={handleMouseLeave11}
              className={styles.googleDiv}
            >
              <FcGoogle style={{ fontSize: "23px" }} />
              <h4 style={{ fontWeight: "lighter" }}>Continue with Google</h4>
            </div>

            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              style={{ marginTop: "10px", backgroundColor: `${color}` }}
              className={styles.googleDiv}
            >
              <SiFacebook style={{ fontSize: "23px", color: "blue" }} />
              <h4 style={{ fontWeight: "lighter" }}>Continue with Facebook</h4>
            </div>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpen}
              className={styles.emailbutton}
            >
              Sign up with email
            </button>
            <div style={{ height: "1px", backgroundColor: "#E6E7E8" }}></div>
            <h5
              style={{ color: "grey", marginTop: "8px", fontWeight: "normal" }}
            >
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
              }}
            ></div>
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                placeholder="Your Password"
              />
            </div>
            <div className={styles.loginDiv}>
              <h5 style={{ color: "grey", fontWeight: "normal" }}>
                Forgot password?
              </h5>

              <button
                onClick={() => {
                  const payload = {
                    email: email,
                    password: password,
                  };
                  handleLogin(payload);
                  setPassword("");
                  setEmail("");
                }}
              >
                Login
              </button>
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
          <p>hindi</p>
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
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <ClearIcon
            className={styles.boxCloseIcon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClose}
          />
          <div className={styles.modelDiv}>
            <h3 style={{ marginBottom: "20px", marginTop: "5px" }}>Sign up</h3>
            <h5>Name</h5>
            <input
              type="text"
              value={sname}
              onChange={(e) => {
                setSname(e.target.value);
              }}
              placeholder="What would you liked to be called ?"
            />
            <h5>Email</h5>
            <input
              type="text"
              value={semail}
              onChange={(e) => {
                setSemail(e.target.value);
              }}
              placeholder="Your email"
            />
            <h5>Password</h5>
            <input
              type="text"
              value={spassword}
              onChange={(e) => {
                setSpassword(e.target.value);
              }}
              placeholder="Your Password"
            />
          </div>
          <div className={styles.modelBorderDiv}></div>

          <button
            onClick={() => {
              const payload = {
                name: sname,
                email: semail,
                password: spassword,
              };
              handleSignup(payload);
              setSname("");
              setSpassword("");
              setSemail("");
            }}
            className={styles.modelButton}
          >
            Sign up
          </button>
        </Box>
      </StyledModal>
    </div>
  );
}
