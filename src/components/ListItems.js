import React, { Component } from "react";
import ListItem from "./ListItem";

const ListItems = props => {
  return (
    <ul className="list-items">
      {props.items.map(x => {
        return (
          <ListItem
            removeItem={props.removeItem}
            itemName={x.text}
            key={x.id}
            handleChecked={props.handleChecked}
            checked={x.checked}
            uniqueKey={x.id}
          />
        );
      })}
    </ul>
  );
};

export default ListItems;
