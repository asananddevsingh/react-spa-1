import React from "react";
import voteUpIcon from "../../assets/icons/vote-up.png";
import "./voteUp.css";

/**
 * @description - Vote up component
 *
 * @param {*} props - Component props
 */
const voteUp = props => {
  return (
    <div className="Vote-Up">
      <img
        className="Vote-Image"
        src={voteUpIcon}
        alt="Vote Up"
        onClick={props.onClick}
      />
      <span className="Vote-Text">Vote Up</span>
      <span>{props.voteCount}</span>
    </div>
  );
};

export default voteUp;
