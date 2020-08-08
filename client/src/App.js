import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { loadUser } from './actions/authActions'
import Start from "./components/start-screen/start";
import Dashboard from './components/admin-dashboard/dashboard'
import Menu from "./components/menu/menu";
import AdminPage from './components/admin-login-page/admin-page'
import Categories from "./components/categories/categories";
import "./App.css";
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
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/menu" component={Menu} />
        </div>
      </Provider>
    )
  }
}
export default App