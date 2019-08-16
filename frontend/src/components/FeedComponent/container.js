import React, { Component } from "react";
import FeedComponent from "./presenter";

class Container extends Component {
    render() {
        return <FeedComponent click={this._onClick} {...this.props} />;
    }
    _onClick = () => {
        this.props.history.replace(`/town/${this.props.id}`);
    };
}

export default Container;
