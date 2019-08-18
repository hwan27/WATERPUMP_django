import React from "react";
import styles from "./styles.module.scss";

const TownComponent = props => {
    return (
        <div id="pattern" className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <div onClick={props.click} className={styles.listText}>
                        {props.title}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TownComponent;
