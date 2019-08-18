import React from "react";
import styles from "./styles.module.scss";
import pumpImg from "../../images/whitePump.gif"

const Pump1 = props => (
    <div className={styles.pumpOne}>
        <span>1번펌프</span>
        {props.sector.pump_1_auto ? <span>자동</span> : <span>수동</span>}
        {props.sector.pump_1_operating_rate}
        {props.sector.pump_1_current}
        {props.sector.pump_1_freq}
        {props.sector.pump_1_power}
    </div>
);

export default Pump1;
