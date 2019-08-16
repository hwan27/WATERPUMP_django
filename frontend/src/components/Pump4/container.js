import React, { Component } from "react";
import Pump4 from "./presenter";

class Container extends Component {
    render() {
        return <Pump4 {...this.props} />;
    }
}

export default Container;
