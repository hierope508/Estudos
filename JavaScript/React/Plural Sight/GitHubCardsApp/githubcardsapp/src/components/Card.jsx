import React, { Component } from "react";
import "../css/Card.css";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github.profile">
        <img src={profile.avatar_url}></img>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
