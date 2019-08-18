import React from "react";
import styles from "./styles.module.scss";
import wifi from '../../images/wifi01.png';
import waterTap from '../../images/waterTap.gif';

const TownComponent = props => {
    return (
        <div id="pattern" className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <div onClick={props.click} className={styles.listText}>
                        <div className={styles.column}>
                            <div>
                                {props.title}
                            </div>
                            <div className={styles.row}>
                                <img src={wifi} className={styles.wifi}/>
                                <img src={waterTap} className={styles.waterTap}/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TownComponent;
