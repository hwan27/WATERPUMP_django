import React, { Component } from "react";
import PropTypes from "prop-types";
import SectorScreen from "./presenter";

class Container extends Component {
    state = {
        loading: true,
        setPressure: 0,
        isRefreshing: false
    };
    static propType = {
        getSector: PropTypes.func.isRequired
    };

    _refresh = () => {
        const { getSector } = this.props;
        this.setState({ loading: true });
        getSector(this.props.feedSector.sector_id);
    };

    _setPressure = e => {
        this.setState({ setPressure: e.target.value });
    };

    _updatePressure = async () => {
        const { setModem, updatePressure } = this.props;
        const { setPressure } = this.state;
        await updatePressure(this.props.feedSector.sector_id, setPressure);
        await setModem(this.props.feedSector.modem_number, setPressure);
        this._refresh();
        alert("설정압력이" + setPressure + "로 변경되었습니다");
    };

    _refreshInterval = async () => {
        await this._connectModem();
        this.setState({ isRefreshing: true });
        let interval = setInterval(() => this._refresh(), 2000);
        setTimeout(() => {
            clearInterval(interval);
            this.setState({ isRefreshing: false });
        }, 30000);
    };

    _connectModem = () => {
        const { connectModem } = this.props;
        connectModem(this.props.feedSector.modem_number);
    };
    _logout = async () => {
        const { logout } = this.props;
        await this.props.history.replace("/");
        logout();
    };
    _gohome = () => {
        this.props.history.replace("/");
    };
    componentDidMount = async () => {
        const { getSector } = this.props;
        const sectorId = this.props.match.params.id;

        if (!this.props.feedSector || this.props.feedSector !== sectorId) {
            getSector(sectorId);
        } else {
            this.setState({
                loading: false
            });
        }
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feedSector) {
            this.setState({
                loading: false
            });
        }
    };
    render() {
        const { feedSector, history } = this.props;
        return (
            <SectorScreen
                {...this.state}
                sector={feedSector}
                connectModem={this._connectModem}
                hisotry={history}
                refreshInterval={this._refreshInterval}
                set_pressure={this._setPressure}
                update_pressure={this._updatePressure}
                logout={this._logout}
                gohome={this._gohome}
            />
        );
    }
}

export default Container;
