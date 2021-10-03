import React from "react";

const footerData = [
  "About",
  "Careers",
  "Team",
  "Privacy",
  "Acceptable Use",
  "Business",
  "Press",
  "You Ad Choices",
];

const Footer = () => {
  return (
    <div
      style={{
        height: "60px",
        width: "130px",
        display: "flex",
        gap:"2px",
        flexWrap: "wrap",
        fontSize: "13px",
        lineHeight: "0.2"
      }}
    >
      {footerData.map((el) => {
        return (
          <div style={{ textAlign: "center", margin: "auto",height:"20px",width:"100px" }}>
            <p>{`· ${el} `}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
