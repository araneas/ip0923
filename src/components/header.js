import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <div className="logo">Coffee House</div>
        <ul className="navigation">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Desserts</li>
          <li>About us</li>
          <li>Contacts</li>
          <li>Account</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="banner"></div>
    </header>
  );
}
