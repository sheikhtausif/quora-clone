import React from "react";

const Message = () => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <g stroke="none" fill="none" fillRule="evenodd">
        <path
          d="M7,4.5 L15,4.5 C16.6568542,4.5 18,5.84314575 18,7.5 L18,13.5 C18,15.1568542 16.6568542,16.5 15,16.5 L12,16.5 L8.5,20.5 L8.5,16.5 L7,16.5 C5.34314575,16.5 4,15.1568542 4,13.5 L4,7.5 C4,5.84314575 5.34314575,4.5 7,4.5 Z M20,12.5 C20.5522847,12.5 21,12.9477153 21,13.5 L21,17.5 C21,18.0522847 20.5522847,18.5 20,18.5 L18,18.5 L18,20.5 L16,18.5 L14,18.5"
          className="icon_svg-stroke"
          strokeWidth="1.5"
          stroke="#666"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <g className="icon_svg-fill_as_stroke" fill="#666">
          <circle cx="8" cy="10.5" r="1"></circle>
          <circle cx="11" cy="10.5" r="1"></circle>
          <circle cx="14" cy="10.5" r="1"></circle>
        </g>
      </g>
    </svg>
  );
};

export default Message;
