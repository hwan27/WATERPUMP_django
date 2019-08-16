import React from "react";
import PropTypes from "prop-types";

const LoginForm = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input type="submit" value="Log in" />
    </form>
    <span>Forgot password?</span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
