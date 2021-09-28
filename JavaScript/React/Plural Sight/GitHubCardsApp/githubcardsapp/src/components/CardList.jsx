import React, { Component } from "react";
import Card from "./Card";

function CardList(props) {
  const { profiles } = props;
  return (
    <div style={{ marginLeft: "3vw" }}>
      {profiles.map((p) => {
        return (
          <div key={p.id}>
            <Card {...p} />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
