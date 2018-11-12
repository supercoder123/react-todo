import React, { Component } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import uuid from "uuid/v1";
import Header from "./components/Header";
import {
  addItem,
  removeItem,
  handleChange,
  handleChecked,
  selectAll,
  deleteAll,
  itemRemover
} from "./functions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        text: "",
        checked: false
      },
      items: [],
      filteredList: []
    };
    // unique ids
    this.id = uuid();
    // used for filtering
    this.query = "";
    //checked flag
    this.checkedAll = false;

    //Preserve this binding
    this.addItem = addItem.bind(this);
    this.removeItem = removeItem.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleChecked = handleChecked.bind(this);
    this.selectAll = selectAll.bind(this);
    this.itemRemover = itemRemover.bind(this);
    this.deleteAll = deleteAll.bind(this);
  }

  // function to add item
  render() {
    return (
      <div>
        <Form
          items={this.state.items}
          checkedAll={this.checkedAll}
          addItem={this.addItem}
          handleChange={this.handleChange}
          selectAll={this.selectAll}
          deleteAll={this.deleteAll}
        />
        <ListItems
          items={!this.query ? this.state.items : this.state.filteredList}
          removeItem={this.removeItem}
          handleChecked={this.handleChecked}
          uniqueKey={this.state.item.id}
        />
      </div>
    );
  }
}

export default App;
