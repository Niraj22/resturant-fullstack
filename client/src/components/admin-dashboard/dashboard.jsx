import React, { Component } from 'react'
import Sidebar from '../dashboard-components/sidebar/sidebar'
import { Container, Page } from './dashboard.styles'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AdminCat from '../dashboard-components/admin-categories/adminCat'
export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Sidebar />
                    <Page>
                        <Switch>
                            <Route exact path="/dashboard/admincategories" component={AdminCat} />
                        </Switch>
                    </Page>
                </Container>
            </BrowserRouter>
        )
    }
}
