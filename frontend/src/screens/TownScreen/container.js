import React, { Component } from "react";
import PropTypes from "prop-types";
import TownScreen from "./presenter";

class Container extends Component {
    state = {
        loading: true
    };
    static propType = {
        getTown: PropTypes.func.isRequired
    };

    
    intervalRefresh = 0

    componentDidMount = () => {
        const { getTown } = this.props;
        const townId = this.props.match.params.id;

        if (!this.props.feedTown || this.props.feedTown.id !== townId) {
            getTown(townId);
        } else {
            this.setState({
                loading: false
            });
        }
        this.intervalRefresh = setInterval(()=>this._refresh(), 60000)
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feedTown) {
            this.setState({
                loading: false
            });
        }
    };

    componentWillUnmount(){
        clearInterval(this.intervalRefresh)
    }

    _refresh = () => {
        const { getTown } = this.props;
        
        getTown(this.props.feedTown.id);
      };
    _logout = async () => {
        const { logout } = this.props;
        await this.props.history.replace("/");
        logout();
    };
    _gohome = () => {
        this.props.history.replace("/");
    };
    render() {
        const { feedTown, history } = this.props;
        return (
            <TownScreen
                {...this.state}
                town={feedTown}
                history={history}
                logout={this._logout}
                gohome={this._gohome}
                refresh={this._refresh}
            />
        );
    }
}

export default Container;
