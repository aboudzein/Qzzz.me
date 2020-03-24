import React from "react";
import BulletIcon from "./icons/Forms/Bullet";

const getViewBox = name => {
  switch (name) {
    case "phone":
      return "0 0 32 33";
    case "message":
      return "0 0 38 34";
    case "envelope":
      return "0 0 40 26";
    case "trash":
      return "0 0 13.5 17.5";
    case "wifi":
      return "0 0 12 9";
    default:
      return "0 0 32 32";
  }
};


const FreeIcon = ({

}) => (
    <BulletIcon/>
);

export default FreeIcon;
