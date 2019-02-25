import "./Child.css";
import React from "react";

function template() {
  return (
    <div className="child">
      <h1>Child</h1>
      <input ref="un" /><input  ref="pwd" /> <input type="button" value="login" onClick={this.fnLoginData.bind(this)} />
    </div>
  );
};

export default template;
