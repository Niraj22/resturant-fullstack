import React, { Component } from 'react'
import Sidebar from '../dashboard-components/sidebar/sidebar'
import { Container, Page } from './dashboard.styles'
// import { Route, Switch } from "react-router-dom";
// import AdminDashboard from '../dashboard-components/dashboard-page/dashboard'
// import { } from '../dashboard-components'
// import { } from '../dashboard-components'
// import { } from '../dashboard-components'
// import { } from '../dashboard-components'

export default class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Sidebar />
                <Page>
                    <h1>Welcome</h1>
                </Page>
            </Container>
        )
    }
}
