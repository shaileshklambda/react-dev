import {
  DEBUGGER_LOADING,
  DEBUGGER_SUCCESS,
  DEBUGGER_FAILED,
  DEBUGGER_CLEAR
} from "../actionTypeConstants/Automation";

const initialState = {
  debugger: {
    loading: false,
    data: null,
    error: null
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEBUGGER_LOADING:
      return {
        ...state,
        debugger: {
          ...state.debugger,
          loading: true
        }
      };

    case DEBUGGER_SUCCESS:
      return {
        ...state,
        debugger: {
          ...state.debugger,
          loading: false,
          data: action.result.data
        }
      };

    case DEBUGGER_FAILED:
      return {
        ...state,
        debugger: {
          ...state.debugger,
          loading: false,
          error: action.error
        }
      };

    case DEBUGGER_CLEAR:
      return { ...state, debugger: initialState.debugger };

    default:
      return state;
  }
}
