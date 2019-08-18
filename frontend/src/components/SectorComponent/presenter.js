import React from "react";
import Pump1 from "components/Pump1";
import Pump2 from "components/Pump2";
import Pump3 from "components/Pump3";
import Pump4 from "components/Pump4";
import styles from "./styles.module.scss";

const SectorComponent = props => {
    return (
        <div>

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
            {props.sector.pump_open ? <span>문열림</span> : null}
            {props.sector.low_pressure ? <span>저압</span> : null}
            {props.sector.pump_1_disorder ? <span>펌프1 고장</span> : null}
            {props.sector.pump_1_low_water ? <span>펌프1 수위이상</span> : null}
            {props.sector.pump_2_disorder ? <span>펌프2 고장</span> : null}
            {props.sector.pump_2_low_water ? <span>펌프2 수위이상</span> : null}
            {props.sector.pump_3_disorder ? <span>펌프3 고장</span> : null}
            {props.sector.pump_3_low_water ? <span>펌프3 수위이상</span> : null}
            {props.sector.pump_4_disorder ? <span>펌프4 고장</span> : null}
            {props.sector.pump_4_low_water ? <span>펌프4 수위이상</span> : null}
            </div>
        </div>
    );
};

export default SectorComponent;
