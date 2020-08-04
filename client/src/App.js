import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Start from "./components/start-screen/start";
import Menu from "./components/menu/menu";
import Categories from "./components/categories/categories";
import Admin from "./components/admin-login-page/admin-page";
export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Start} />
      <Route exact path="/adminpanel" component={Admin} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/menu" component={Menu} />
    </div>
  );
}
