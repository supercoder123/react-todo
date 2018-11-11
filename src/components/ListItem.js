import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      key: this.props.uniqueKey
    };
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div className="flex list-item">
        <input
          type="checkbox"
          onClick={() => {
            this.handleCheck();
          }}
        />
        <li>
          {!this.state.checked && this.state.key === this.props.uniqueKey ? (
            this.props.itemName
          ) : (
            <strike>{this.props.itemName}</strike>
          )}
        </li>
        <button
          className="remove-button"
          onClick={() => {
            this.props.removeItem(this.props.uniqueKey);
          }}>
          X
        </button>
      </div>
    );
  }
}

// const ListItem = props => {
//   return (
//     <div className="flex list-item">
//       <li key={props.keyProp}>{props.itemName}</li>
//       <button
//         className="remove-button"
//         onClick={() => {
//           props.removeItem(props.keyProp);
//         }}>
//         X
//       </button>
//     </div>
//   );
// };

export default ListItem;
