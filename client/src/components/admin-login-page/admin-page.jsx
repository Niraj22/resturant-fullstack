import React, { Component } from "react";
import { connect } from 'react-redux'
import AdminLogin from "../admin-login/admin";
import { withRouter } from 'react-router-dom'
import { RiAdminLine } from "react-icons/ri";
import { ReactComponent as Background } from "../../assets/bg.svg";
import { Container, BoxContainer } from "./admin-page.styles";
class AdminPage extends Component {
  styleIcons = { marginBottom: "20px" };
  renderAdmin = () => {
    if (this.props.isAuthenticated === true) {
      this.props.history.push('/dashboard')
    }
    else {
      return (
        <Container >
          <Background
            style={{
              height: "45rem",
              width: "auto",
              zIndex: "-18239",
              position: "absolute",
              opacity: ".4",
            }}
          />
          <BoxContainer>
            <RiAdminLine size="3rem" style={this.styleIcons} />
            <AdminLogin />
          </BoxContainer>
        </Container >
      )
    }
  }
  render() {
    return (
      <>{this.renderAdmin()}</>
    )
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default withRouter(connect(mapStateToProps)(AdminPage))