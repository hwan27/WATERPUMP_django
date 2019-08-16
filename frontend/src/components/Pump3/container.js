import React, { Component } from "react";
import Pump3 from "./presenter";

class Container extends Component {
    render() {
        return <Pump3 {...this.props} />;
    }
}

export default Container;
