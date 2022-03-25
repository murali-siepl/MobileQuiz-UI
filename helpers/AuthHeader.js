export function authHeader(token) {
  if (token) {
    return {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "*/*",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "*",
    };
  } else {
    return {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    };
  }
}

export const Headers = (values) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(values),
  };
};
