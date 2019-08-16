import React from "react";
//import "components/Screens/styles/styles.css";
//import loginLogo from "../../../images/loginLogo.png";

const LoginScreen = (props, context) => (
    <div className="login.contariner">
        {/* <img src={loginLogo} /> */}
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
    </div>
);
export default LoginScreen;
