import "./Show.css";
import React from "react";

function template() {
  return (
    <div className="show">
      <h1>{this.props.name}</h1>
      <h1>{this.props.pwd}</h1>
    </div>
  );
};

export default template;
