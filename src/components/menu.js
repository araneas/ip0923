import React, { Component } from "react";
import Item from "./item";

export class Menu extends Component {
  render() {
    return (
      <main>
        {this.props.menu.map((element) => (
          <Item key={element.id}  item={element} />
        ))}
      </main>
    );
  }
}

export default Menu;
