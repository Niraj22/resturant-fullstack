import React, { Component } from 'react'
import Sidebar from '../dashboard-components/sidebar/sidebar'
import { Container, Page } from './wrapper.styles'
export default function Wrapper(Children) {
    return class WrappedElement extends Component {
        render() {
            return (
                <Container>
                    <Sidebar />
                    <Page>
                        <Children />
                    </Page>
                </Container>
            )
        }
    }
}
