import { actionCreators as userActions } from "./user";
import { API_URL } from "../../constants";

const SET_TOWN = "SET_TOWN";

function setTown(feedTown) {
  return {
    type: SET_TOWN,
    feedTown
  };
}
function getTown(townId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`/pumps/town/${townId}`, {
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
      .then(json => dispatch(setTown(json)));
  };
}

function updatePressure(sector_id, pressure) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    //alert(pressure);
    fetch(`${API_URL}/pumps/sector/${sector_id}/`, {
      method: "put",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        set_pressure: pressure
      })
    });
  };
}

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOWN:
      return applySetTown(state, action);
    default:
      return state;
  }
}

function applySetTown(state, action) {
  const { feedTown } = action;
  return {
    ...state,
    feedTown
  };
}

const actionCreators = {
  getTown,
  updatePressure
};

export { actionCreators };

export default reducer;
