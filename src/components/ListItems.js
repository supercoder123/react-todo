import React, { Component } from "react";
import ListItem from "./ListItem";

const ListItems = props => {
  return (
    <ol className="form">
      {props.items.map(x => {
        return (
          <ListItem
            removeItem={props.removeItem}
            itemName={x.text}
            keyProp={x.id}
          />
        );
      })}
    </ol>
  );
};

export default ListItems;
