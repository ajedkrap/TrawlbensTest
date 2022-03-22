const initialState = {
  isLoggedIn: false,
  isIdle: false,
  idleCount: 0,
  isLoading: false,
  isLoginError: false,
  data: null,
  profile: null,
};

const App = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'USER_ACTIVE': {
      return {...state, isIdle: false};
    }
    case 'USER_IDLE': {
      return {...state, isIdle: true};
    }
    case 'IDLE_COUNT': {
      return {...state, idleCount: state.idleCount++};
    }
    case 'UPDATE_PROFILE': {
      return {...state, profile: payload};
    }
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isLoginError: false,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoginError: true,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        data: payload,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoggedIn: false,
        data: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default App;
