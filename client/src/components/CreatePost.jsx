import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";
import styled from "../styles/Home.module.css";

const CreatePost = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (url) {
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("jwt"),
                },
                body: JSON.stringify({
                    title,
                    body,
                    pic: url,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        M.toast({ html: data.error, classes: "#c62828 red darken-3" });
                    } else {
                        M.toast({
                            html: "Post Added Successfully",
                            classes: "#43a047 green darken-1",
                        });
                        history.push("/");
                    }
                })
                .catch((err) => {
                    console.log(err);
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
                //console.log('data:', data)
                setUrl(data.url);
            })
            .catch((err) => {
                console.log("err:", err);
            });
    };
    return (
        <div className={styled.create_post_md}>
            <div className="card input-field">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <div className="file-field input-field">
                    <div className="btn  #64b5f6 black darken-1">
                        <span>Upload Image</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button
                    className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => postDetails()}>
                    Submit Post
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
