import React from "react";
import { Button } from "reactstrap";

const AddButton = props => {
  return <Button color={props.color}>{props.buttonText}</Button>;
};

export default AddButton;
