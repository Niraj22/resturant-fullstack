import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import "./App.css";
import Start from "./components/start-screen/start";
import Menu from "./components/menu/menu";
import Categories from "./components/categories/categories";
import Admin from "./components/admin-login-page/admin-page";
import { loadUser } from './actions/authActions'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Start} />
          <Route exact path="/adminpanel" component={Admin} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/menu" component={Menu} />
        </div>
      </Provider>
    )
  }
}
export default App