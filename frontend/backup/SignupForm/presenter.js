import React from "react";

const SignupForm = props => (
  <div>
    <h3>Sign up to see photos and videos from your friends.</h3>
    <form>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Full Name" />
      <input type="username" value="Username" />
      <input type="password" placeholder="Password" />
      <input type="submit" value="Log in" />
    </form>
    <p>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>
    </p>
  </div>
);

export default SignupForm;
