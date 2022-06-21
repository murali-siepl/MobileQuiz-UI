import webfox from './api';

const logError = (error) => {
  console.log('system error: ', error);
};

const exec = async (fn, params = null, error = null) => {
  const res = {
    data: null,
    error: null,
    syserror: null,
  };

  await fn(params)
    .then((response) => {
      res.data = response;
    })
    .catch((err) => {
      if (err.response) {
        res.error = err.response;
      } else if (err.request) {
        res.error = err.request;
      } else {
        res.error = err;
      }
    });

  return res;
};

const login = (params) =>
  exec(() => {
    return webfox.post(`login`, params);
  });

const signup = (params) =>
  exec(() => {
    return webfox.post(`signup`, params);
  });

export default {
  logError,
  login,
  signup,
};
