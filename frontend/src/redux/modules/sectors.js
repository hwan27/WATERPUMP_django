import { actionCreators as userActions } from "./user";

const SET_SECTOR = "SET_SECTOR";

function setSector(feedSector) {
  return {
    type: SET_SECTOR,
    feedSector
  };
}
function getSector(sectorId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/pumps/sector/${sectorId}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setSector(json)));
  };
}

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SECTOR:
      return applySetSector(state, action);
    default:
      return state;
  }
}

function applySetSector(state, action) {
  const { feedSector } = action;
  return {
    ...state,
    feedSector
  };
}

const actionCreators = {
  getSector
};

export { actionCreators };

export default reducer;
