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
    <div>
        <Navigation {...props} title={props.sector.title} />

        <div className={styles.feed}>
            <div>모뎀번호: {props.sector.modem_number}</div>
            <div>
                <span>
                    접속상태:{" "}
                    {props.isRefreshing ? (
                        <span>접속중</span>
                    ) : (
                        <span>접속종료</span>
                    )}
                </span>

                <span onClick={props.refreshInterval}>접속요청</span>
            </div>
            <div>
                <span>흡입압력: {props.sector.suction_pressure}</span>
                <span>유량: {props.sector.discharge}</span>
                <span>토출압력: {props.sector.discharge_pressure}</span>

                <form>
                    <span>설정압력: </span>
                    <input
                        value={props.setPressure}
                        onChange={props.set_pressure}
                    />
                    <span onClick={props.update_pressure}>입력</span>
                </form>
            </div>
            <span>최종 업데이트: {props.sector.updated_at}</span>
            <SectorComponent {...props} />
        </div>
    </div>
);

export default SectorScreen;
