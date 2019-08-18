import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';




const Navigation = (props, history) => (
    <div className={styles.header_top}>
        <div className={styles.header_column1}>
            <div onClick={props.gohome}>
                <FontAwesomeIcon icon={faHome} />
            </div>
        </div>
        <div className={styles.header_column2}>
            {props.title ? (
                <div className={styles.header_title}>{props.title}</div>
            ) : (
                "상수도 가압장 관측 제어 설비"
            )}
        </div>
        <div className={styles.logoutFont}>
            <div onClick={props.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
        </div>
    </div>
);

export default Navigation;
