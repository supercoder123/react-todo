import React from "react";
import InputBox from "./InputBox";
import AddButton from "./AddButton";

const Form = props => {
  return (
    <div className="form">
      <InputBox placeholder="Search" />
      <div className="todoDiv">
        <InputBox placeholder="What is your task?" />
        <AddButton color="primary" buttonText="Add Item" />
      </div>
    </div>
  );
};

export default Form;
