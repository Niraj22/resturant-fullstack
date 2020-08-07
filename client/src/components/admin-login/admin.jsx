import React, { Component } from 'react'
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'
import { FormLabel, FormInput, Button } from './admin.styles'
import { connect } from 'react-redux'
class Admin extends Component {
  state = {
    email: '',
    password: '',
    message: null
  }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ message: error.message.message })
      }
      else {
        this.setState({ message: null })
      }
    }
    //if authenticated close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        console.log("it is authenticated")
      }
    }
  }
  onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
  onSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    const user = {
      email,
      password
    }
    this.props.login(user)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.message ? <div>{this.state.message}</div> : null}
        <FormLabel>
          Username
        </FormLabel>
        <FormInput
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          onChange={this.onChange} />
        <FormLabel>
          Password
        </FormLabel>
        <FormInput
          type="password"
          name="password"
          id="password"
          onChange={this.onChange}
        />
        <Button>Log-in</Button>
      </form>
    )
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})
export default connect(mapStateToProps, { login, clearErrors })(Admin)