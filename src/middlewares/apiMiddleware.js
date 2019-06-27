import { BASE_URL } from "../constants";
import { API } from "../actions/types";
import axios from "axios";

export const apiMiddleware = ({ dispatch }) => next => action => {
  console.log(action);
  next(action);
  if (action.type !== API) {
    return;
  }
  const { url, onSuccess, onFailure, method = "GET", data } = action.payload;
  const dataProperty = ["GET"].includes(method) ? "params" : "data";
  let endPointUrl = BASE_URL + url;
  axios
    .get(endPointUrl, data)
    .then(({ data }) => dispatch({ type: onSuccess, payload: data }))
    .catch(error => dispatch({ type: onFailure, payload: error }));
};

// axios
//   .request({ url, method, [dataProperty]: data })
//   .then(data => dispatch({ type: onSuccess, payload: data }))
//   .catch(error => dispatch({ type: onFailure, payload: error }));
// };
