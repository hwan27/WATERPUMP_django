import React from "react";
import styles from "./styles.module.scss";

const Loading = props => (
  <div className={styles.container}>
    <img src={require("images/girl.jpg")} className={styles.spinner} />
  </div>
);

export default Loading;
