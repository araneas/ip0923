import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
//
//
//
export class ItemDelete extends Component {
  render() {
    return (
      <div className="item-add-delete">
        <img src={"./images/" + this.props.item.image} />
        <p>{this.props.item.title}</p>
        <p>price: {this.props.item.price}$</p>
        <FaTrash
          className="item-delete"
          onClick={() =>
            this.props.onDeleteFromCartOrderList(this.props.item.id)
          }
        />
      </div>
    );
  }
}
//
//
//

export default ItemDelete;
