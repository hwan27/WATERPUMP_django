import React, { Component } from "react";
import PropTypes from "prop-types";
import SectorScreen from "./presenter";
import { PopupboxManager, PopupboxContainer} from'react-popupbox'

class Container extends Component {
  state = {
    loading: true,
    setPressure: 0,
    isRefreshing: false,
    mapShowing: false
  };
  static propType = {
    getSector: PropTypes.func.isRequired
  };

  intervalRefresh = 0

  _mapClick = () => {
    this.setState(prevState => ({ mapShowing: !prevState.mapShowing}))
  }

  _refresh = () => {
    const { getSector } = this.props;
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
    this._popup()
    //alert("설정압력이" + setPressure + "Bar로 변경되었습니다");
  };

  _refreshInterval = async () => {
    await this._connectModem();
    this.setState({ isRefreshing: true });
    let interval = setInterval(() => this._refresh(), 4000);
    setTimeout(() => {
      clearInterval(interval);
      this.setState({ isRefreshing: false });
    }, 60000);
  };

  _popup = () => {
    const content = (
      <div>"hi"</div>

    )
    PopupboxManager.open({content, config: {
      titleBar: {
        enable: true,
text: 'hello'},
fadeIn: true,
fadeInSpeed: 500      }
    })
  }

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

    getSector(sectorId)
    if (
      !this.props.feedSector ||
      this.props.feedSector.sector_id !== sectorId
    ) {
      getSector(sectorId);
    } else {
      this.setState({
        setPressure: this.props.feedSector.set_pressure,
        loading: false
      });
    }
    this.intervalRefresh = setInterval(()=>this._refresh(), 60000)
  };
  componentWillUnmount(){
    clearInterval(this.intervalRefresh)
  }
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
        refresh={this._refresh}
        mapClick={this._mapClick}
      />
    );
  }
}

export default Container;
