import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LaptopList from "./components/LaptopList";
import ScreenList from "./components/ScreenList";
import MobileList from "./components/MobileList";
import TabletList from "./components/TabletList";
import HomePage from "./components/HomePage";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Dialogue from "./components/Dialogue";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/laptops" component={LaptopList} />
          <Route path="/screens" component={ScreenList} />
          <Route path="/smartphones" component={MobileList} />
          <Route path="/tablets" component={TabletList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Dialogue />
      </>
    );
  }
}

export default App;
