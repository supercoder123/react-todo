import React, { Component } from "react";

const Header = props => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Header;
