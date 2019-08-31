import React, { Component } from "react";
import PropTypes from "prop-types";
import SectorScreen from "./presenter";
import { confirmAlert} from'react-confirm-alert'
import { faThList } from "@fortawesome/free-solid-svg-icons";

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
    const pressure = setPressure * 100

    // if (pressure < 1000) {
    //   const pressure = '0' + pressure
    //   await updatePressure(this.props.feedSector.sector_id, setPressure);
    //   await setModem(this.props.feedSector.modem_number, pressure);
      
    //   this._refresh();
    // }

    // else if (pressure < 100) {
    //   const pressure = '00' + pressure
    //   await updatePressure(this.props.feedSector.sector_id, setPressure);
    //   await setModem(this.props.feedSector.modem_number, pressure);
      
    //   this._refresh(); 
    // }

    // else if (pressure < 10) {
    //   //const pressure = '000' + pressure
    //   await updatePressure(this.props.feedSector.sector_id, setPressure);
    //   await setModem(this.props.feedSector.modem_number, pressure);
      
    //   this._refresh();
    // }

    // else {
      
      await updatePressure(this.props.feedSector.sector_id, setPressure);
      await setModem(this.props.feedSector.modem_number, pressure);
      
      this._refresh();
    //}

    // await updatePressure(this.props.feedSector.sector_id, setPressure);
    // await setModem(this.props.feedSector.modem_number, pressure);
    
    // this._refresh();
    ;
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

  _handleClick = () => {
    if(this.state.setPressure <100) {
    if (this.state.setPressure.length == 3 && this.state.setPressure.slice(1,2) == '.' ){
      alert(`설정압력이 ${this.state.setPressure}Bar 로 변경되었습니다`)
      this._updatePressure()
    }
    else if (this.state.setPressure.length == 4 && (this.state.setPressure.slice(1,2) == '.' || this.state.setPressure.slice(2,3) =='.') ){
      alert(`설정압력이 ${this.state.setPressure}Bar 로 변경되었습니다`)
      this._updatePressure()
    }
    else if (this.state.setPressure.length == 5 && this.state.setPressure.slice(2,3) == '.'){
      alert(`설정압력이 ${this.state.setPressure}Bar 로 변경되었습니다`)
      this._updatePressure()
    }
    else {
      alert('입력값이 잘못되었습니다')
    }
  }
    // if (this.state.setPressure * 100 < 10000 && this.state.setPressure.slice(0,1) != '.' && this.state.setPressure.length ==5 ){
    // alert(`설정압력이 ${this.state.setPressure}Bar 로 변경되었습니다`)
      
    //   this._updatePressure()
    // }
    else {
      alert("입력값이 잘못되었습니다")
    }
  }

  

  // _handleEnter = (e) => {
  //   if (e.keyCode == 13){
  //     alert(`설정압력이 ${this.state.setPressure}Bar 로 변경되었습니다`)
      
  //     this._updatePressure()
  //   }
  // }

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
        handleEnter={this._handleEnter}
        handleClick={this._handleClick}
      />
    );
  }
}

export default Container;
