import React from "react";
import styles from "./styles.module.scss";
import wifi from "../../images/wifi01.png";
import wifiError from "../../images/wifiError.png";
import waterTap from "../../images/waterTap.gif";
import waterTapX from "../../images/waterTapX.png";

const TownComponent = props => {
  return (
    <div id="pattern" className={styles.container}>
      <ul className={styles.list}>
        <li>
          <div onClick={props.click} className={styles.listText}>
            <div className={styles.column}>
              <div>{props.title}</div>
              <div className={styles.row}>
                {props.pump_1_on ||
                props.pump_2_on ||
                props.pump_3_on ||
                props.pump_4_on ? (
                  <img src={waterTap} className={styles.waterTap} />
                ) : (
                  <img src={waterTapX} className={styles.waterTap} />
                )}
                {(Date.now() - Date.parse(props.updated_at)) / 3600000 < 2 ? (
                  <img src={wifi} className={styles.wifi} />
                ) : (
                  <img src={wifiError} className={styles.wifi} />
                )}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TownComponent;
