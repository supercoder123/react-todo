import React from "react";

const ListItem = props => {
  return (
    <div className="flex">
      <li key={props.keyProp}>{props.itemName}</li>
      <button
        onClick={() => {
          props.removeItem(props.keyProp);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ListItem;
