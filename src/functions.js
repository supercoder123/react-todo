import React from "react";
import uuid from "uuid/v1";

export function addItem(item) {
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
        // localStorage.setItem("items", JSON.stringify(this.state.items));
        this.setState({
          items: this.state.items
        });
      }
    );
    console.log("localstorage", localStorage.getItem("items"));
  }
}

export function itemRemover(key, list, num) {
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
export function removeItem(key) {
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
export function handleChange(e) {
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

export function handleChecked(key) {
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

export function selectAll() {
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

export function deleteAll() {
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
