import React from "react";
import InputBox from "./InputBox";
import { Button, Input } from "reactstrap";

const Form = props => {
  let input;
  return (
    <div className="form">
      <Input
        placeholder="Search"
        onChange={e => {
          props.handleChange(e);
        }}
      />
      <div className="todoDiv">
        <Input
          placeholder="What is your task?"
          name="itemName"
          innerRef={node => {
            input = node;
          }}
          onKeyPress={e => {
            if (e.charCode == 13) {
              props.addItem(input.value);
              input.value = "";
            }
          }}
        />
        <Button
          color="primary"
          onClick={() => {
            props.addItem(input.value);
            console.log(input.value);
            input.value = "";
          }}
        >
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default Form;
