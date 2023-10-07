import React, { Component } from "react";
//
//
//

export class ItemAdd extends Component {
  render() {
    return <div className="item-add-delete">
      <img src={"./images/" + this.props.itemAdd.image} />
      <p>{this.props.itemAdd.title}</p>
      <p>price: {this.props.itemAdd.price}$</p>
      <p className="item-add"  onClick={() => this.props.onAddToCartOrderList(this.props.itemAdd)}>to Cart</p>
    </div>;
  }
}
//
//
//
export default ItemAdd;
