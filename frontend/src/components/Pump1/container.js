import React, { Component } from "react";
import Pump1 from "./presenter";

class Container extends Component {
    render() {
        return <Pump1 {...this.props} />;
    }
}

export default Container;
