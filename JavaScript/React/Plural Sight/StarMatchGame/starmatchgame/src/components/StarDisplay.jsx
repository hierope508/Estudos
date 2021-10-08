import React, { Component } from "react";
import "./../css/Star.css";
import utils from "./../utils";

function StarDisplay(props) {
  return (
    <>
      {utils.range(1, props.count).map((star) => {
        return <div className="star" key={star}></div>;
      })}
    </>
  );
}

export default StarDisplay;
