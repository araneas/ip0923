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
          <ItemAdd
            showItemPage={this.props.showItemPage}
            key={element.id}
            item={element}
            onAddToCartOrderList={this.props.onAddToCartOrderList}
          />
        ))}
      </main>
    );
  }
}
//
//
//
export default Assortment;
