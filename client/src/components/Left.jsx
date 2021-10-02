import React, { useState, useEffect } from "react";
import styles from "../styles/left.module.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

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

const textfields = {
  marginTop: "10px",
  marginBottom: "10px",
  width: "500",
  maxWidth: "100%",
};
const Left = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      fetch("http://localhost:8000/posts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          photo: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.error) {
          console.log('dataEE:', data.error)
          } else {
            console.log('datapost:', data)
            history.push("/");
          }
        })
        .catch((err) => {
          console.log("amit",err);
        });
    }
  }, [url]);

  const postDetails = () => {
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
       console.log('data:PhotoUrl', data)
        setUrl(data.url);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  return (
    <div className={styles.left_space}>
      <div className={styles.second_main}>
        <Button onClick={handleOpen} sx={button_style}>
          <p className={styles.plus}>+</p>
          <p className={styles.plus_para}>Create post</p>
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
              <h4>Create a post</h4>
              <p>
                Share your interests, curate content, host discussions, and
                more.
              </p>
              <div>
                <form>
                  <h5>Title</h5>
                  <Box sx={textfields}>
                    <TextField
                      fullWidth
                      label="Title"
                      variant="outlined"
                      placeholder="Add little description ..."
                      size="small"
                      id="fullWidth"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Box>
                  <h5>Description</h5>
                  <Box sx={textfields}>
                    <TextField
                      fullWidth
                      label="Description"
                      variant="outlined"
                      placeholder="Add little description ..."
                      size="small"
                      id="fullWidth"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </Box>
                  <h5>Image</h5>
                  <div className={styles.fileinput}>
                    <label htmlFor="upload-photo">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />

                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                      >
                        Upload here
                      </Button>
                    </label>
                  </div>

                  <div className={styles.createpost}>
                    <Button  variant="contained" onClick={() => postDetails()}>
                      Create
                    </Button>
                  </div>
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
