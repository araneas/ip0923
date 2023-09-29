import React, { Component } from "react";

export class Item extends Component {
  render() {
    return <div className="item">
      <img src={"./images/" + this.props.item.image} />
      <p>{this.props.item.title}</p>
      <p>price: {this.props.item.price}$</p>
    </div>;
  }
}

export default Item;
