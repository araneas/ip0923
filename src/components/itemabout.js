import React, { Component } from 'react'

export class ItemAbout extends Component {
  render() {
    return (
      <div className="item-about">
        <div className='item-about-wrapper'>
        <div onClick=
          {() => this.props.showItemPage(this.props.item)}>
        <img src={"./images/" + this.props.item.image} />
        </div>
        <p>
          {this.props.item.title} 
        </p>
        <p>price: {this.props.item.price}$</p>
        <p
          className="item-add"
          onClick={() => this.props.onAddToCartOrderList(this.props.item)}
        >
          to Cart
        </p>
        </div>
        
      </div>
    )
  }
}

export default ItemAbout