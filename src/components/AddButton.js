import React from "react";
import { Button } from "reactstrap";

const AddButton = props => {
  return (
    <Button color={props.color} onClick={() => props.click}>
      {props.buttonText}
    </Button>
  );
};

export default AddButton;
