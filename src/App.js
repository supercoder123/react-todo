import React, { Component } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import uuid from "uuid/v1";
import Header from "./components/Header";
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
    //Preserve this binding
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  // function to add item
  addItem(item) {
    console.log(uuid());
    if (!!item) {
      console.log("additem", item);
      this.setState(
        {
          item: {
            id: uuid(),
            text: item,
            checked: false
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

  // function to remove item
  removeItem(key) {
    console.log("key", key);
    if (!this.query) {
      let filteredArray = this.state.items.filter(x => x.id != key);
      this.setState({
        items: filteredArray
      });
    } else {
      let filteredArray = this.state.items.filter(x => x.id != key);
      this.setState({
        items: filteredArray
      });

      let filterList = this.state.filteredList.filter(x => x.id != key);
      this.setState({
        filteredList: filterList
      });
    }

    //this.id--;
  }

  // function to handle change in filter input box
  handleChange(e) {
    console.log(e.target.value);
    this.query = e.target.value.toLowerCase();
    let searchList = this.state.items;
    let ff = searchList.filter(x => {
      return x.text.toLowerCase().includes(this.query);
    });
    this.setState({
      filteredList: ff
    });
  }

  handleChecked(key) {
    let checkedItem = this.state.items.find(x => {
      return x.id === key;
    });
    console.log("checkedItem", checkedItem);
    let index = this.state.items.indexOf(checkedItem);
    checkedItem.checked = !checkedItem.checked;
    this.setState(
      {
        item: checkedItem
      },
      () => {
        let newList = this.state.items;
        newList[index] = checkedItem;
        this.setState({
          items: newList
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Form addItem={this.addItem} handleChange={this.handleChange} />
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
