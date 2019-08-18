import React from "react";
//import "components/Screens/styles/styles.css";
import loginLogo from "../../images/loginLogo.png";
import styles from "./styles.module.scss";

const LoginScreen = (props, context) => (
    <div>
        <div className={styles.container}>
            <img src={loginLogo} alt="djWJrn" className={styles.loginLogo} />
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={props.usernameValue}
                    onChange={props.handleInputChange}
                    name="username"
                    className={styles.input}
                />
            </form>
            <form onSubmit={props.handleSubmit} className={styles.container}>
                <input
                    type="password"
                    placeholder="Password"
                    value={props.passwordValue}
                    onChange={props.handleInputChange}
                    name="password"
                    className={styles.input}
                />
            </form>
            <form onSubmit={props.handleSubmit} className={styles.container}>
                <input
                    type="submit"
                    value="Log in"
                    className={styles.loginButton}
                />
            </form>
        </div>
    </div>
);
export default LoginScreen;
