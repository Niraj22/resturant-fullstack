import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { loadUser } from '../../../actions/authActions'
import Loader from '../../loader/loader'
import { LoadingContainer } from '../common/loadingContainer'
import { ReactComponent as Background } from "../../../assets/bg.svg";
import { ContainerAll, Icon, TextContainer } from './dashboard.styles'
class AdminDashboard extends Component {
    format = { marginBottom: "3rem" }
    componentDidMount() {
        this.props.loadUser();
    }
    renderList = () => {
        if (this.props.auth.isAuthenticated !== true) {
            this.props.history.push('/admin')
            return
        }
        if (this.props.auth.isLoading) {
            return (
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            )
        }
        else {
            const user = this.props.auth.user.name
            return (
                <ContainerAll>
                    <Background
                        style={{
                            height: "20rem",
                            width: "auto",
                            zIndex: "-18239",
                            position: "absolute",
                            opacity: ".75",
                        }}
                    />
                    <Icon><FaUserCircle color="#40414d" size="15rem" style={this.format} /></Icon>
                    <TextContainer>{`Welcome ${user} To Your Dashboard`}</TextContainer>
                </ContainerAll>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderList()}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default withRouter(connect(mapStateToProps, { loadUser })(AdminDashboard))