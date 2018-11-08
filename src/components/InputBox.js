import React from "react";
import { Input } from "reactstrap";

const InputBox = props => {
  return (
    <div>
      <Input placeholder={props.placeholder} />
    </div>
  );
};

export default InputBox;
