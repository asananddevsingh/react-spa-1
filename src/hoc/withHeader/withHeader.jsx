import React from "react";
import Header from "../../components/header/header";
import "./withHeader.css";

/**
 * @description - HOC to wrap the container layout with header.
 *
 * @param {*} props - Component props.
 */
const withHeader = props => {
  return (
    <>
      <Header />
      <div className="Container">{props.children}</div>
    </>
  );
};

export default withHeader;
