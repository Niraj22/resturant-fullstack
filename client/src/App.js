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
//!admin routes
import Wrapper from './components/wrapper/wrapper.jsx'
import AdminDashboard from "./components/dashboard-components/dashboard-page/dashboard"
import AdminCat from './components/dashboard-components/admin-categories/adminCat'
import AdminUsers from './components/dashboard-components/admin-users/adminUsers'
import AdminItems from './components/dashboard-components/admin-items/adminItems'
import Orders from './components/dashboard-components/placed-orders/orders'
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
            <Route exact path="/admindashboard" component={Wrapper(AdminDashboard)} />
            <Route exact path="/admincategories" component={Wrapper(AdminCat)} />
            <Route exact path="/adminusers" component={Wrapper(AdminUsers)} />
            <Route exact path="/adminitems" component={Wrapper(AdminItems)} />
            <Route exact path="/adminorders" component={Wrapper(Orders)} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
export default App