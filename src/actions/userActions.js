import { GET_USERS, GET_ERRORS, API, GET_ADDRESS } from "./types";
import { extractQueryParams } from "../helpers/actionHelper";
export const getUsers = requestObject => ({
  type: API,
  payload: {
    url: `/users?page=${requestObject.page}&size=${requestObject.size}`,
    method: "GET",
    data: requestObject,
    onSuccess: GET_USERS,
    onFailure: GET_ERRORS
  }
});
export const getAddress = requestObject => ({
  type: API,
  payload: {
    url: `/address?user_ids=${requestObject.user_ids}`,
    method: "GET",
    data: requestObject,
    onSuccess: GET_ADDRESS,
    onFailure: GET_ERRORS
  }
});
// export const getUsers = requestObject => ({
//   type: API,
//   payload: {
//     url: `/users`,
//     method: "GET",
//     data: requestObject,
//     onSuccess: GET_USERS,
//     onFailure: GET_ERRORS
//   }
// });
// export const getAddress = requestObject => ({
//   type: API,
//   payload: {
//     url: `/address`,
//     method: "GET",
//     data: requestObject,
//     onSuccess: GET_ADDRESS,
//     onFailure: GET_ERRORS
//   }
// });
