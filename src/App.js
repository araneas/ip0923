import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";
import Assortment from "./components/assortment";
//
//
//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOrderList: [ ],
      assortment: [
        {
          id: 1,
          title: "Americano",
          image: "Americano.jpg",
          category: "coffee",
          price: "1",
        },
        {
          id: 2,
          title: "Capuchino",
          image: "Capuchino.jpg",
          category: "coffee",
          price: "2",
        },
        {
          id: 3,
          title: "Latte",
          image: "Latte.jpg",
          category: "coffee",
          price: "3",
        },
        {
          id: 4,
          title: "Croissant",
          image: "Croissant.jpg",
          category: "Desserts",
          price: "1",
        },
        {
          id: 5,
          title: "Pie",
          image: "Pie.jpg",
          category: "Desserts",
          price: "2",
        },
        {
          id: 6,
          title: "Ice cream",
          image: "Ice cream.jpg",
          category: "Desserts",
          price: "2",
        },
        {
          id: 7,
          title: "Black tea",
          image: "Black tea.jpg",
          category: "Tea",
          price: "1",
        },
        {
          id: 8,
          title: "Green tea",
          image: "Green tea.jpeg",
          category: "Tea",
          price: "1",
        },
        {
          id: 9,
          title: "Coctail",
          image: "Coctail.jpg",
          category: "Tea",
          price: "3",
        },
      ],
    };
    this.addToCartOrderList = this.addToCartOrderList.bind(this)
    this.deleteFromCartOrderList = this.deleteFromCartOrderList.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header cartOrderList={this.state.cartOrderList} onDeleteFromCartOrderList={this.deleteFromCartOrderList} />
        <Assortment assortment={this.state.assortment} onAddToCartOrderList={this.addToCartOrderList} />
        <Footer />
      </div>
    );
  }
  //
  //
  //
  deleteFromCartOrderList(id) {
    this.setState({cartOrderList: this.state.cartOrderList.filter(elementDelete => elementDelete.id !== id)})
  }
  //
  //
  //
  addToCartOrderList(itemAdd) {
    let actuallyInCartOrderList = false
    this.state.cartOrderList.forEach(elementAdd => {
      if (elementAdd.id === itemAdd.id)
        actuallyInCartOrderList = true
    })
    if (!actuallyInCartOrderList)
    this.setState({ cartOrderList: [...this.state.cartOrderList, itemAdd] })
  }
}
//
//
//
export default App;
