import React, { Component } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        text: ""
      },
      items: [],
      filteredList: []
    };
    this.id = 0;
    this.query = "";
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(item) {
    if (!!item) {
      console.log("additem", item);
      this.setState(
        {
          item: {
            id: this.id++,
            text: item
          }
        },
        function() {
          this.state.items.push(this.state.item);
          this.setState({
            items: this.state.items
          });
        }
      );
      console.log(this.id);
    }
  }

  removeItem(key) {
    console.log("key", key);
    let filteredArray = this.state.items.filter(x => x.id != key);
    this.setState({
      items: filteredArray
    });
    this.id--;
  }

  handleChange(e) {
    this.query = e.target.value;
    let searchList = this.state.items;
    let ff = searchList.filter(x => {
      return x.text.includes(this.query);
    });

    this.setState({
      filteredList: ff
    });

    // console.log("prevstate", this.state.items);
    // console.log("change");
  }

  render() {
    return (
      <div>
        <Form addItem={this.addItem} handleChange={this.handleChange} />
        <ListItems
          items={!this.query ? this.state.items : this.state.filteredList}
          removeItem={this.removeItem}
          uniqueKey={this.id}
        />
      </div>
    );
  }
}

export default App;
