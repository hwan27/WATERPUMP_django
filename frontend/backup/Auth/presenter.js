import React from "react";
import styles from "./styles.module.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.main}>
    <div>
      {props.action === "login" && <LoginForm />}
      {props.action === "signup" && <SignupForm />}
    </div>
    <div>
      {props.action === "signup" && (
        <p>
          have an account?{""}
          <span onClick={props.changeAction}>log in</span>
        </p>
      )}
      {props.action === "login" && (
        <p>
          don't have an account?{""}
          <span onClick={props.changeAction}>sign up</span>
        </p>
      )}
    </div>
  </main>
);

export default Auth;
