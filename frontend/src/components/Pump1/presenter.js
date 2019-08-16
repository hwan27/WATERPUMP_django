import React from "react";

const Pump1 = props => (
    <div>
        <span>1번펌프</span>
        {props.sector.pump_1_auto ? <span>자동</span> : <span>수동</span>}
        {props.sector.pump_1_operating_rate}
        {props.sector.pump_1_current}
        {props.sector.pump_1_freq}
        {props.sector.pump_1_power}
    </div>
);

export default Pump1;
