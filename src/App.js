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
    //checked flag
    this.checkedAll = false;

    //Preserve this binding
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
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

  itemRemover(key, list, num) {
    let filteredArray = list.filter(x => x.id != key);
    if (num === 0) {
      this.setState({
        items: filteredArray
      });
    } else {
      this.setState({
        filteredList: filteredArray
      });
    }
  }

  // function to remove item
  removeItem(key) {
    console.log("key", key);
    if (!this.query) {
      this.itemRemover(key, this.state.items, 0);
    } else {
      this.itemRemover(key, this.state.items, 0);
      this.itemRemover(key, this.state.filteredList, 1);
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

  selectAll() {
    if (this.state.items !== 0) {
      // this.state.checkedAll = !this.state.checkedAll;
      this.checkedAll = !this.checkedAll;
      let checkedList = this.state.items.map(x => {
        x.checked = this.checkedAll;
        return x;
      });
      console.log(checkedList);
      this.setState({
        items: checkedList
      });
      console.log(this.checkedAll);
    }
  }

  deleteAll() {
    let deletedList = this.state.items.filter(x => {
      return x.checked === false;
    });
    this.setState({
      items: deletedList
    });
    this.setState({
      checkedAll: false
    });
    this.checkedAll = false;
    console.log(this.checkedAll);
  }

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
