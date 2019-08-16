import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as cityActions } from "redux/modules/cities";

const mapStateToProps = (state, ownProps) => {
  const {
    cities: { feed }
  } = state;
  return {
    feed
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(cityActions.getFeed());
    }
  };
};
//Add all the actions for:
//log in
//Sign up
//Recover Password
//Check username
//Check Password
//Check Email

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
