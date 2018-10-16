import {
  TIMELINE_MAIN_LOADING,
  TIMELINE_MAIN_SUCCESS,
  TIMELINE_MAIN_FAILED,
  TIMELINE_MAIN_CLEAR
} from "../actionTypeConstants/Timeline";

const initialState = {
  timeline: {
    loading: false,
    data: null,
    error: null
  }
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TIMELINE_MAIN_LOADING:
      return {
        ...state,
        timeline: {
          ...state.timeline,
          loading: true
        }
      };

    case TIMELINE_MAIN_SUCCESS:
      return {
        ...state,
        timeline: {
          ...state.timeline,
          loading: false,
          data: action.result.data
        }
      };

    case TIMELINE_MAIN_FAILED:
      return {
        ...state,
        timeline: {
          ...state.timeline,
          loading: false,
          error: action.error
        }
      };

    case TIMELINE_MAIN_CLEAR:
      return {
        ...state,
        timeline: initialState.timeline
      };

    default:
      return state;
  }
}
