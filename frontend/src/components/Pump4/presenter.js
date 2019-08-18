import React from "react";
import styles from "./styles.module.scss";
import pumpImg from "../../images/whitePump.gif";

const Pump4 = props => (
    <div className={styles.pumpBoxes}>

        <div className={styles.pumpBox}>
            <div className={styles.pump}>
                <img className={styles.pumpImg} src={pumpImg} alt="pumpImg"/>
                <div className={styles.pumpTitle}>1번펌프</div>
            </div>
            <div className={styles.detail}>
            {props.sector.pump_1_auto ? <div className={styles.auto}>자동</div> : <div className={styles.manual}>수동</div>}
            
            <div className={styles.bottom}>
            <div className={styles.row}>
                <div className={styles.name}>가동률</div>
                <div className={styles.value}>{props.sector.pump_1_operating_rate} %</div>
            </div>

            <div className={styles.row}>
                <div className={styles.name}>전류</div>
                <div className={styles.value}>{props.sector.pump_1_current} A</div>
            </div>

            <div className={styles.row}>
                <div className={styles.name}>주파수</div>
                <div className={styles.value}>{props.sector.pump_1_freq} Hz</div>
            </div>

            <div className={styles.row}>
                <div className={styles.name}>전력</div>
                <div className={styles.value}>{props.sector.pump_1_power} kw</div>
            </div>
            </div>

            </div>
        </div>

        <div className={styles.pumpBox}>
            <div className={styles.pump}>
                <img className={styles.pumpImg} src={pumpImg} alt="pumpImg"/>
                <div className={styles.pumpTitle}>2번펌프</div>
            </div>
            <div className={styles.detail}>
            {props.sector.pump_2_auto ? <span>자동</span> : <span>수동</span>}
            {props.sector.pump_2_operating_rate}
            {props.sector.pump_2_current}
            {props.sector.pump_2_freq}
            {props.sector.pump_2_power}
            </div>
        </div>

        <div className={styles.pumpBox}>
                <div className={styles.pump}>
                    <img className={styles.pumpImg} src={pumpImg} alt="pumpImg"/>
                    <div className={styles.pumpTitle}>3번펌프</div>
                </div>
            <div className={styles.detail}>
            {props.sector.pump_3_auto ? <span>자동</span> : <span>수동</span>}
            {props.sector.pump_3_operating_rate}
            {props.sector.pump_3_current}
            {props.sector.pump_3_freq}
            {props.sector.pump_3_power}
            </div>
        </div>

        <div className={styles.pumpBox}>
            <div className={styles.pump}>
                <img className={styles.pumpImg} src={pumpImg} alt="pumpImg"/>
                <div className={styles.pumpTitle}>4번펌프</div>
            </div>
            <div className={styles.detail}>
            {props.sector.pump_4_auto ? <span>자동</span> : <span>수동</span>}
            {props.sector.pump_4_operating_rate}
            {props.sector.pump_4_current}
            {props.sector.pump_4_freq}
            {props.sector.pump_4_power}
            </div>
        </div>

    </div>
);

export default Pump4;
