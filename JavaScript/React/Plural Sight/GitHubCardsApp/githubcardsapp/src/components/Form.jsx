import React, { Component } from "react";
import "../css/Form.css";
class Form extends React.Component {
  render() {
    const handleAdd = (e) => {
      e.preventDefault();
      let userName = document.getElementById("userNameInput").value;
      this.props.onAdd(userName);
    };

    return (
      <div>
        <form onSubmit={handleAdd}>
          <input id="userNameInput" type="text" placeholder="GitHub username" />
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
