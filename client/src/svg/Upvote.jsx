import React from "react";


const Upvote = (upvote) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
            <g
                id="upvote"
                className="icon_svg-stroke icon_svg-fill"
                strokeWidth="1.5"
                stroke="#2E69FF"
                fill={upvote === true ? '#2E69FF' : "white"}
                fillRule="evenodd"
                strokeLinejoin="round"
            >
                <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
            </g>
        </svg>
    );
};

export default Upvote;
