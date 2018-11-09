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
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    if (!!item) {
      let todoItem = {
        id: id++,
        text: item
      };
      this.state.items.push(todoItem);
      this.setState({
        items: this.state.items
      });
    }
  }

  removeItem(key) {
    console.log("key", key);
    let filteredArray = this.state.items.filter(x => x.id != key);
    this.setState({
      items: filteredArray
    });
  }

  render() {
    return (
      <div>
        <Form addItem={this.addItem} />
        <ListItems
          items={this.state.items}
          removeItem={this.removeItem}
          uniqueKey={id}
        />
      </div>
    );
  }
}

export default App;
