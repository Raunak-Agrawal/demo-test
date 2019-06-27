import { GET_USERS, GET_ADDRESS } from "../actions/types";
const initialState = {
  users: [],
  addresses: []
};
export default function(state = initialState, action) {
  console.log("REDUCER");
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_ADDRESS:
      return {
        ...state,
        addresses: action.payload
      };
    default:
      return state;
  }
}
