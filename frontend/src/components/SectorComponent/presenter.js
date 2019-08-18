import React from "react";
import Pump1 from "components/Pump1";
import Pump2 from "components/Pump2";
import Pump3 from "components/Pump3";
import Pump4 from "components/Pump4";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const SectorComponent = props => {
  return (
    <div className={styles.container}>
      {props.sector.pump_count == 1 ? (
        <Pump1 {...props} />
      ) : props.sector.pump_count == 2 ? (
        <Pump2 {...props} />
      ) : props.sector.pump_count == 3 ? (
        <Pump3 {...props} />
      ) : props.sector.pump_count == 4 ? (
        <Pump4 {...props} />
      ) : null}
      <div className={styles.alert}>
        {props.sector.pump_open ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            문열림
          </div>
        ) : null}
        {props.sector.low_pressure ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            저압
          </div>
        ) : null}
        {props.sector.pump_1_disorder ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프1 고장
          </div>
        ) : null}
        {props.sector.pump_1_low_water ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프1 저수위
          </div>
        ) : null}
        {props.sector.pump_2_disorder ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프2 고장
          </div>
        ) : null}
        {props.sector.pump_2_low_water ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프2 저수위
          </div>
        ) : null}
        {props.sector.pump_3_disorder ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프3 고장
          </div>
        ) : null}
        {props.sector.pump_3_low_water ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프3 저수위
          </div>
        ) : null}
        {props.sector.pump_4_disorder ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프4 고장
          </div>
        ) : null}
        {props.sector.pump_4_low_water ? (
          <div className={styles.alertFont}>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={styles.alertIcon}
            />
            펌프4 저수위
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SectorComponent;
