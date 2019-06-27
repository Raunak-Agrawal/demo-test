export const extractQueryParams = userDetails => {
  return Object.keys(userDetails)
    .map(key => key + "=" + userDetails[key])
    .join("&");
};
