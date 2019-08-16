import React, { Component } from "react";
import TownComponent from "./presenter";

class Container extends Component {
    render() {
        return <TownComponent click={this._onClick} {...this.props} />;
    }
    _onClick = () => {
        this.props.history.replace(`/sector/${this.props.sector_id}`);
    };
}

export default Container;
