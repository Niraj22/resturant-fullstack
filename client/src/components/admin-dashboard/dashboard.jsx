import React, { Component } from 'react'
import Sidebar from '../dashboard-components/sidebar/sidebar'
import { Container, Page } from './dashboard.styles'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AdminCat from '../dashboard-components/admin-categories/adminCat'
import AdminDashboard from '../dashboard-components/dashboard-page/dashboard'
export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Sidebar />
                    <Page>
                        <Switch>
                            <Route exact path="/admincategories" component={AdminCat} />
                            <Route exact path="/admindashboard" component={AdminDashboard} />
                        </Switch>
                    </Page>
                </Container>
            </BrowserRouter>
        )
    }
}
