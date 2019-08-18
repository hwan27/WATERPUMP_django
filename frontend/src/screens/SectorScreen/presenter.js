import React from "react";
import styles from "./styles.module.scss";
import SectorComponent from "components/SectorComponent";
import Navigation from "components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

const SectorScreen = props => {
  if (props.loading) {
    return <LoadingFeed />;
  } else if (props.sector) {
    return <RenderFeed {...props} />;
  }
};

const LoadingFeed = () => null;

const RenderFeed = props => (
  <div className={styles.container}>
    <Navigation {...props} title={props.sector.title} />

    <div className={styles.feed}>
      <div className={styles.row}>
        <div className={styles.modemName}>
          모뎀번호 : {props.sector.modem_number}
        </div>
        {/* <div className={styles.mapButton}>
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </div> */}

        <div className={styles.connectBox}>
          <div className={styles.connect}>
            접속상태:{" "}
            {props.isRefreshing ? (
              <span className={styles.connecting}>접속중</span>
            ) : (
              <span className={styles.connectEnd}>접속종료</span>
            )}
          </div>

          <div onClick={props.refreshInterval} className={styles.connectPlz}>
            접속요청
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.row1}>
          {props.sector.suction_pressure == "00.00" ? null : (
            <div className={styles.row2}>
              <div className={styles.boxFont}>흡입압력:</div>
              <div className={styles.boxValue}>
                {props.sector.suction_pressure} Bar
              </div>
            </div>
          )}
          {props.sector.discharge == "0000" ? null : (
            <div className={styles.row2}>
              <div className={styles.boxFont}>유량:</div>
              <div className={styles.boxValue}>
                {props.sector.discharge} m^3/s
              </div>
            </div>
          )}
        </div>
        <div className={styles.row1}>
          <div className={styles.boxFont}>토출압력:</div>
          <div className={styles.boxValue}>
            {props.sector.discharge_pressure} Bar
          </div>

          <div className={styles.boxFont}>설정압력:</div>
          <form>
            <input
              value={props.setPressure}
              onChange={props.set_pressure}
              className={styles.boxValueInput}
            />
          </form>
          <div onClick={props.update_pressure} className={styles.boxButton}>
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </div>

        <div className={styles.updateBox}>
          <div className={styles.updateTitle}>최종 업데이트 :</div>
          <div className={styles.updateDate}>
            {props.sector.updated_at.slice(0, 4)}년{" "}
            {props.sector.updated_at.slice(5, 7)}월{" "}
            {props.sector.updated_at.slice(8, 10)}일{" "}
            {props.sector.updated_at.slice(11, 19)}
          </div>
        </div>
      </div>
      <div className={styles.sectorComponent}>
        <SectorComponent {...props} />
      </div>
    </div>
  </div>
);

export default SectorScreen;
