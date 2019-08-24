import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedScreen from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    static propType = {
        getFeed: PropTypes.func.isRequired
    };
    componentDidMount() {
        const { getFeed } = this.props;
        if (!this.props.feed) {
            getFeed();
        } else {
            this.setState({
                loading: false
            });
        }
    }
    _refresh = () => {
        const { getFeed } = this.props;
        //this.setState({ loading: true });
        getFeed()
      };

    _logout = () => {
        const { logout } = this.props;
        logout();
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                loading: false
            });
        }
    };
    render() {
        const { feed, history } = this.props;
        return (
            <FeedScreen
                history={history}
                logout={this._logout}
                {...this.state}
                feed={feed}
                refresh={this._refresh}
            />
        );
    }
}

export default Container;
