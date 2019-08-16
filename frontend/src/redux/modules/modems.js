//imports
import { API_URL } from "../../constants";
//actions
// const GET_MODEM = "GET_MODEM";
// const SET_MODEM = "SET_MODEM";
// const SET_CONNECT = "SET_CONNECT";
// //action creators
// function getModem() {
//   return { type: GET_MODEM };
// }

// function setModem(number) {
//   return {
//     type: SET_MODEM,
//     number
//   };
// }

// function setConnect(number) {
//   return {
//     type: SET_CONNECT,
//     number
//   };
// }
// //api action
// function applyGetModem(state, action) {
//   //serialport
//   test = "1";
//   return {
//     ...state,
//     data: test
//   };
// }

function connectModem(number) {
    //alert(number);
    return (dispatch, getstate) => {
        const {
            user: { token }
        } = getstate();

        fetch(`${API_URL}/modems/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                modem_number: number
            })
        });
    };
}

function setModem(number, pressure) {
    //alert(number);
    return (dispatch, getstate) => {
        const {
            user: { token }
        } = getstate();

        fetch(`${API_URL}/modems/pressure/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                modem_number: number,
                pressure: pressure
            })
        });
    };
}

// function connect() {
//   return (dispatch, getState) => {
//     const {
//       user: { token }
//     } = getState();
//     fetch(`${API_URL}/modems/`, {
//       method: "POST",
//       headers: {
//         Authorization: `JWT ${token}`,
//         "Content-Type": "application/json"
//       }
//       // body: JSON.stringify({
//       //   number
//       // })
//     });
//     // .then(response => {
//     //   return response.json();
//     // })
//     // .then(json => dispatch(setConnect(json)));
//   };
// }

//initial state

const initialState = {};

//reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        //    case GET_MODEM:
        //      return applyGetModem(state, action);
        //    case SET_MODEM:
        //      return applySetModem(state, action);
        //    case SET_CONNECT:
        //      return applyConnect(state, action);
        default:
            return state;
    }
}

// // reducer actions
// function applySetModem(state, action) {
//   const { number } = action;
//   return {
//     ...state,
//     number
//   };
// }

// function applyConnect(state, action) {
//   const { number } = action;
//   return {
//     ...state,
//     number
//   };
// }

//exports
const actionCreators = {
    connectModem,
    setModem
    //getModem
    //connect
};

export { actionCreators };
//default reducer export
export default reducer;
