import React from "react";
import styles from "../styles/left.module.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
};

const button_style = {
    height: "35px",
    width: "150px",
    backgroundColor: "whitesmoke",
};
const Left = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={styles.left_space}>
            <div className={styles.second_main}>
                <Button onClick={handleOpen} sx={button_style}>
                    <p className={styles.plus}>+</p>
                    <p className={styles.plus_para}>Create space</p>
                </Button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div>
                            <h4>Create a space</h4>

                            <div>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Name of a space"
                                        name="name"
                                    />
                                </form>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Left;
