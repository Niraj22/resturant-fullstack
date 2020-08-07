import React, { Component } from 'react'
import { FormLabel, FormInput, Button } from './admin.styles'
export default class Admin extends Component {
  state = {
    email: '',
    password: '',
    message: null
  }
  onChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }
  onSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    const user = {
      email,
      password
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
