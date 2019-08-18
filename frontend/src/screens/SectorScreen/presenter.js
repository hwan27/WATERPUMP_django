import React from "react";
import styles from "./styles.module.scss";
import SectorComponent from "components/SectorComponent";
import Navigation from "components/Navigation";

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
        <div className={styles.mapButton}>지도</div>

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
          <div className={styles.boxFont}>흡입압력:</div>
          <div className={styles.boxValue}>
            {props.sector.suction_pressure} Bar
          </div>
          <div className={styles.boxFont}>유량:</div>
          <div className={styles.boxValue}>{props.sector.discharge} m^3/s</div>
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
            입력
          </div>
        </div>

        <div className={styles.updateBox}>
          최종 업데이트 : {props.sector.updated_at}
        </div>
      </div>
      <div className={styles.sectorComponent}>
        <SectorComponent {...props} />
      </div>
    </div>
  </div>
);

export default SectorScreen;
