import React, { Component } from 'react'
import Loader from '../../loader/loader'
import { LoadingContainer } from '../common/loadingContainer'
export default class Orders extends Component {
    render() {
        return (
            <LoadingContainer>
                <Loader />
            </LoadingContainer>
        )
    }
}
