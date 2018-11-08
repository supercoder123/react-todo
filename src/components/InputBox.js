import React from "react";
import { Input } from "reactstrap";

const InputBox = props => {
  return (
    <div>
      <Input placeholder={props.placeholder} name={props.itemName} />
    </div>
  );
};

export default InputBox;
