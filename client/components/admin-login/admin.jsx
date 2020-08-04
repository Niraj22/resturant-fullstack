import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { LoginUser } from "../../actions/index";
import "../input/input-styles.css";
class UserLogin extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="error">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <div className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off" type={type} />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.LoginUser(formValues);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="email"
          type="text"
          component={this.renderInput}
          label="Enter Username"
        />
        <Field
          name="password"
          type="password"
          component={this.renderInput}
          label="Enter Password"
        />
        <button className="n-button">Log-in</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.email) {
    errors.email = "you must enter username";
  }
  if (!formValues.password) {
    errors.password = "you must enter password";
  }
  return errors;
};

const formWrapped = reduxForm({ form: "userLogin", validate: validate })(
  UserLogin
);
export default connect(null, { LoginUser })(formWrapped);
