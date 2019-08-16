import React, { Component } from "react";
import Pump2 from "./presenter";

class Container extends Component {
    render() {
        return <Pump2 {...this.props} />;
    }
}

export default Container;
