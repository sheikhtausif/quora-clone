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
import Footer from "./Footer";

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

const textfields = {
  marginTop: "10px",
  marginBottom: "10px",
  width: "500",
  maxWidth: "100%",
};

const rightData = [
  {
    images:
      "https://assets.weforum.org/article/image/v9SoNB2IUQa_Qkyv8rG-FCriWj0mMW0ALzksvNzWbd4.jpg",
    name: "Goverment High School",
  },
  {
    images:
      "https://avatarbox.net/avatars/img40/nature_rain_avatar_picture_32091.gif",
    name: "Unrequited love ",
  },
  {
    images:
      "https://media.istockphoto.com/photos/lake-moraine-and-canoe-dock-in-banff-national-park-picture-id500601834?b=1&k=20&m=500601834&s=170667a&w=0&h=wYqBtL-GVKmgqkMoal3IfLrg5bSGwJcQTugrpkGfjRw=",
    name: "Quora Space Discovery",
  },
  {
    images: "https://theessayworld.com/wp-content/uploads/Nature-100x100.jpg",
    name: "Damn #BeteMaujkardi ",
  },
  {
    images: "https://forum.pcastuces.com/avatars/226076.jpg",
    name: "Poetry Hub",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzvb7FfMzX5MomQ1l6kJWfakHJZ4b9Qtp0WDwFy_ujrymdPZ1_4VwqhRjsy8KyRCL&usqp=CAU",
    name: "My Incredible India",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdmT9eWsbDANnpUDMLawRWX3ST__S5RtsQTQS93FifAotuC8WhNqcCxRnPKkgyzHH&usqp=CAU",
    name: " Save Rock and Roll ",
  },
  {
    images: "http://forum.quittingadderall.com/uploads/profile/photo-9483.jpg",
    name: " Save Rock and Roll ",
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXewT1z4ifBkIfHZ06-5CnHkbw-zFxJPxaQ&usqp=CAU",
    name: "Goverment High School",
  },
  {
    images:
      "https://avatarbox.net/avatars/img38/spring_flowers_avatar_picture_63072.gif",
    name: "Impeachment Inquiry ",
  },
  {
    images:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/68a24463347797.5aadd0d83bfb8.jpg",
    name: "Fallout 76 players ",
  },
];

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
          console.log(data);
          if (data.error) {
          console.log('dataEE:', data.error)
          } else {
            console.log('datapost:', data)
            history.push("/");
          }
        })
        .catch((err) => {
          console.log("amit", err);
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
        <button onClick={handleOpen} className={styles.btn_create_post}>
          + Create Post
        </button>
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
                    <Button variant="contained" onClick={() => postDetails()}>
                      Create
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>

      {rightData.map((el, i) => {
        return (
          <div className={styles.space_catogery}>
            <div>
              <img
                className={styles.space_catogery_image}
                height="20"
                width="20"
                src={el.images}
                alt="space_images"
              />
            </div>

            <div>
              <p className={styles.space_catogery_name}>{el.name}</p>
            </div>
          </div>
        );
      })}
      <hr className={styles.space_catogery_hr} />

      <div className={styles.space_catogery_footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Left;
