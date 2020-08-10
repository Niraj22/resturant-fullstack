import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { loadUser } from './actions/authActions'
import Start from "./components/start-screen/start";
import Dashboard from './components/admin-dashboard/dashboard'
import AdminPage from './components/admin-login-page/admin-page'
import Categories from "./components/categories/categories";
import AdminCat from './components/dashboard-components/admin-categories/adminCat'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
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
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={Start} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/admincat" component={AdminCat} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
export default App