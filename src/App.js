import React, { Component } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import "./App.css";

let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let todoItem = {
      id: id++,
      text: item
    };
    this.state.items.push(todoItem);
    this.setState({
      items: this.state.items
    });
    console.log("additem");
  }

  render() {
    return (
      <div>
        <Form addItem={this.addItem} />
        <ListItems items={this.state.items} uniqueKey={id} />
      </div>
    );
  }
}

export default App;
