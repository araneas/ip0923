import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";
import Menu from "./components/menu";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
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
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Menu menu={this.state.menu} />
        <Footer />
      </div>
    );
  }
}

export default App;
