export const idleCount = () => {
  return {
    type: 'IDLE_COUNT',
  };
};

export const userIdle = () => {
  return {
    type: 'USER_IDLE',
  };
};

export const userActive = () => {
  return {
    type: 'USER_ACTIVE',
  };
};

export const login = data => async dispatch => {
  dispatch({type: 'LOGIN_PENDING'});

  setTimeout(() => {
    try {
      dispatch({type: 'LOGIN_FULFILLED', payload: data});
    } catch (err) {
      dispatch({type: 'LOGIN_REJECTED', payload: err});
    }
  }, 2000);
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
