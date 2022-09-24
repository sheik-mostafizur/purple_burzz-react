import React from "react";
import "./styles.scss";

const PrimaryBtn = (props) => {
  return (
    <a
      href={props.href}
      className="btn btn-primary rounded-pill btn-block px-4 py-2 mx-2 mybtn"
    >
      {props.text}
    </a>
  );
};

export default PrimaryBtn;
