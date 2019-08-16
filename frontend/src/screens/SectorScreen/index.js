import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as sectorActions } from "redux/modules/sectors";
import { actionCreators as modemActions } from "redux/modules/modems";
import { actionCreators as townActions } from "redux/modules/towns";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const {
        sectors: { feedSector }
    } = state;
    return {
        feedSector
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getSector: sectorId => {
            dispatch(sectorActions.getSector(sectorId));
        },
        connectModem: number => {
            return dispatch(modemActions.connectModem(number));
        },
        setModem: (number, pressure) => {
            return dispatch(modemActions.setModem(number, pressure));
        },
        updatePressure: (sectorId, pressure) => {
            return dispatch(townActions.updatePressure(sectorId, pressure));
        },
        logout: () => {
            dispatch(userActions.logout());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
