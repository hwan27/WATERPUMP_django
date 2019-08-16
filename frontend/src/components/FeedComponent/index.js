import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as sectorActions } from "redux/modules/sectors";

const mapStateToProps = (state, ownProps) => {
  const {
    sectors: { sector }
  } = state;
  return {
    sector
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSector: id => {
      dispatch(sectorActions.getSector(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
