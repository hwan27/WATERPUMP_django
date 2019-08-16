import React from "react";

const Pump2 = props => (
    <div>
        <div>
            <span>1번펌프: </span>
            {props.sector.pump_1_auto ? <span>자동</span> : <span>수동</span>}
            {props.sector.pump_1_operating_rate}
            {props.sector.pump_1_current}
            {props.sector.pump_1_freq}
            {props.sector.pump_1_power}
        </div>
        <div>
            <span>2번펌프: </span>
            {props.sector.pump_2_auto ? <span>자동</span> : <span>수동</span>}
            {props.sector.pump_2_operating_rate}
            {props.sector.pump_2_current}
            {props.sector.pump_2_freq}
            {props.sector.pump_2_power}
        </div>
    </div>
);

export default Pump2;
