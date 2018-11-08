import React from "react";

const ListItem = props => {
  return <li key={props.key}>{props.itemName}</li>;
};

export default ListItem;
