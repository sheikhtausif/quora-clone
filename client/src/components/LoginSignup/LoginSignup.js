import styles from "../../styles/login.module.css"

import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

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
  background-color: rgba(37,45,41,0.9);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 550,
  backgroundColor: "white",
  border: "2px solid white",
  borderRadius:"6px",
  p: 2,
  px: 4,
  pb: 3
};

export default function Front(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleMouseEnter = e => {
        e.target.style.background = "lightGrey"
        
      }
      const handleMouseLeave = e => {
        e.target.style.background = "white"
        
      }

    return<div className={styles.container}>
        <div className={styles.container1stdiv}>
            <div className={styles.container1stdiv1stDiv}>
            <img src="https://qph.fs.quoracdn.net/main-qimg-ef72851415469d38c90bf2f25427e116" alt="done"/>
            <h4>A place to share knowledge and better understand the world</h4>
            </div>

            <div className={styles.container1stdiv2ndDiv}>
                <div className={styles.container1stdiv2ndDiv1stDiv}>
                <GoogleLoginButton onClick={() => alert("Hello")} >
                <h5 style={{fontWeight:"lighter"}}>Continue with Google</h5>
                </GoogleLoginButton>
                <div className={styles.facebookdiv}>
                <FacebookLoginButton
              
                 onClick={() => alert("Hello")}>
                        <h5 style={{fontWeight:"lighter"}}>Continue with Facebook</h5>
                </FacebookLoginButton>
               
                </div>
                <button 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOpen}
                className={styles.emailbutton}>
                    Sign up with Email
                </button>
                <hr style={{border:"1px solid lightGray" , marginTop:"2px"}}/>
                <h5 style={{color:"grey",marginTop:"4px",fontWeight:"normal"}}>
                By continuing you indicate that you agree to Quora’s Terms of Service and Privacy Policy.
                </h5>
               
                </div>
                <div className={styles.container1stdiv2ndDiv2ndDiv}>

                </div>
                <div className={styles.container1stdiv2ndDiv3rdDiv}>
                        <h4 style={{fontWeight:"normal"}}>Login</h4>
                        <div style={{height:"1px",backgroundColor:"#E6E7E8" , marginTop:"10px",}}></div>
                        <div style={{marginTop:"18px"}}>
                            <p className={styles.inputsLabel}>Email</p>
                            <input className={styles.inputdiv} type="text" placeholder="Your Email"/>
                            <p className={styles.inputsLabel}>Password</p>
                            <input className={styles.inputdiv} type="text" placeholder="Your Password"/>
                        </div>
                        <div className={styles.loginDiv}>
                            <h5 style={{color:"grey",fontWeight:"normal"}}>Forgot password?</h5>
                            <button>Login</button>
                        </div>
                </div>

            </div>
            
            <div style={{height:"1px",backgroundColor:"#E6E7E8" , marginTop:"10px",}}></div>
            <div className={styles.bottomDiv1} >
                <p >hindi</p>
                </div>
                <div className={styles.bottomDiv2} >
                <h5 >About . Careers . Privacy . Terms . Contact . Languages . Your Ad Choices . Press© Quora, Inc. 2021</h5>
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
            onClick={handleClose} />
            <div>
            <h4>Sign up</h4>
            <p>Name</p>
            <input type="text" placeholder="What would you liked to be called ?"/>
            <p>Email</p>
            <input type="text" placeholder="Your email"/>
            
            </div>
        </Box>
      </StyledModal>
    </div>
}