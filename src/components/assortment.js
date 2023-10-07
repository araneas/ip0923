import React, { Component } from "react";
import ItemAdd from "./itemadd";
//
//
//
export class Assortment extends Component {
  render() {
    return (
      <main>
        {this.props.assortment.map((element) => (
          <ItemAdd key={element.id} itemAdd={element} onAddToCartOrderList={this.props.onAddToCartOrderList} />
        ))}
      </main>
    );
  }
}
//
//
//
export default Assortment;
