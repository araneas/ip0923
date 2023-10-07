import React, { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ItemDelete from "./itemdelete";
//
//
//
const showCartOrderListIsFilled = (props) => {
  let total = 0;
  props.cartOrderList.forEach(
    (elementPrice) => (total += Number.parseFloat(elementPrice.price))
  );
  return (
    <div>
      <p className="total">Total: {total}$</p>
      {props.cartOrderList.map((element) => (
        <ItemDelete
          onDeleteFromCartOrderList={props.onDeleteFromCartOrderList}
          key={element.id}
          item={element}
        />
      ))}
    </div>
  );
};
//
//
//
const showCartOrderListIsEmpty = () => {
  return (
    <div>
      <p className="cart-is-empty">Cart is empty</p>
    </div>
  );
};
//
//
//
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <div className="logo">Coffee House</div>
        <ul className="navigation">
          <li>
            <FaMailBulk />
          </li>
          <li>
            <FaShoppingCart
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
            />
          </li>
        </ul>
        {cartOpen && (
          <div className="cart-order-list">
            {props.cartOrderList.length > 0
              ? showCartOrderListIsFilled(props)
              : showCartOrderListIsEmpty()}
          </div>
        )}
      </div>
      <div className="banner"></div>
    </header>
  );
}
