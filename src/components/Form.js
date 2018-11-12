import React from "react";
import InputBox from "./InputBox";
import { FaTrash } from "react-icons/fa";

const Form = props => {
  let input;
  return (
    <div className="form">
      <input
        placeholder="Search"
        onChange={e => {
          props.handleChange(e);
        }}
      />
      <div className="todoDiv">
        <button
          className="trash"
          onClick={() => {
            props.deleteAll();
          }}
        >
          <FaTrash />
        </button>
        <input
          type="checkbox"
          title="Select All"
          checked={props.checkedAll ? true : false}
          onClick={() => {
            props.selectAll();
            console.log("select ALL");
          }}
        />
        <div>
          <input
            type="text"
            placeholder="What is your task?"
            name="itemName"
            ref={node => {
              input = node;
            }}
            onKeyPress={e => {
              if (e.charCode == 13) {
                props.addItem(input.value);
                input.value = "";
              }
            }}
          />
          <button
            className="addItem"
            color="primary"
            onClick={() => {
              props.addItem(input.value);
              console.log(input.value);
              input.value = "";
            }}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
