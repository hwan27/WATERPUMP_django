import React from "react";
import styles from "./styles.module.scss";

const Navigation = (props, history) => (
    <div className={styles.header_top}>
        <div className={styles.header_column1}>
            <span onClick={props.gohome}>home</span>
        </div>
        <div className={styles.header_column2}>
            {props.title ? (
                <div className={styles.header_title}>{props.title}</div>
            ) : (
                "상수도 가압장 관측 제어 설비"
            )}
        </div>
        <div>
            <span onClick={props.logout}>logout</span>
        </div>
    </div>
);

export default Navigation;
