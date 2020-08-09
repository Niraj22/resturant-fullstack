import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";
import { loadUser } from '../../../actions/authActions'
import { ReactComponent as Background } from "../../../assets/bg.svg";
import { ContainerAll, Icon, TextContainer } from './dashboard.styles'
class AdminDashboard extends Component {
    format = { marginBottom: "3rem" }
    componentDidMount() {
        this.props.loadUser();
    }
    renderList = () => {
        if (this.props.auth.user) {
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
        else {
            return (<TextContainer>Error loading user</TextContainer>)
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
export default connect(mapStateToProps, { loadUser })(AdminDashboard)