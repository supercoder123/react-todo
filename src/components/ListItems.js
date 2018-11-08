import React, { Component } from "react";
import ListItem from "./ListItem";

const ListItems = props => {
  return (
    <ul>
      {props.items.map(x => {
        return <ListItem itemName={x.text} key={x.uniqueKey} />;
      })}
    </ul>
  );
};

export default ListItems;
