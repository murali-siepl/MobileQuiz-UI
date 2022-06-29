import api from './queries';

const logerror = api.logError;

const login: any = async (params: any) => {
  const res = await api.login(params).catch((e) => {
    logerror('routes error: ' + e);
    return { data: null, error: e };
  });
  const val: any = res ? res.data : null;

  return { data: val ? val.data : null, error: res.error };
};

const signup: any = async (params: any) => {
  const res = await api.signup(params).catch((e) => {
    logerror('routes error: ' + e);
    return { data: null, error: e };
  });
  const val: any = res ? res.data : null;

  return { data: val ? val.data : null, error: res.error };
};

const forgetPassword: any = async (params: any) => {
  const res = await api.forgetPassword(params).catch((e) => {
    logerror('routes error: ' + e);
    return { data: null, error: e };
  });
  const val: any = res ? res.data : null;

  return { data: val ? val.data : null, error: res.error };
};

const userFeedback: any = async (params: any) => {
  const res = await api.userFeedback(params).catch((e) => {
    logerror('routes error: ' + e);
    return { data: null, error: e };
  });
  const val: any = res ? res.data : null;

  return { data: val ? val.data : null, error: res.error };
};


export default {
  login,
  signup,
  forgetPassword,
  userFeedback,
};
