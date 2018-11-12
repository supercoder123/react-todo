import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      key: this.props.uniqueKey
    };
  }

  // handleCheck() {
  //   this.setState({
  //     checked: !this.state.checked
  //   });
  // }

  render() {
    return (
      <div className="flex list-item">
        <input
          type="checkbox"
          onClick={() => {
            this.props.handleChecked(this.state.key);
          }}
          checked={this.props.checked}
        />
        <li>
          {!this.props.checked && this.state.key === this.props.uniqueKey ? (
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
