import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as townActions } from "redux/modules/towns";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const {
        towns: { feedTown }
    } = state;
    return {
        feedTown
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTown: townId => {
            dispatch(townActions.getTown(townId));
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
