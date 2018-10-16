import axios from "axios";

export const ITEMS_ARE_LOADING = "ITEMS_ARE_LOADING";
export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";
export const ITEMS_HAVE_ERROR = "ITEMS_HAVE_ERROR";

export const initialState = {
  status: false,
  data: {}
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ITEMS_ARE_LOADING:
      return { ...state, status: action.itemsAreLoading, data: {} };
    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        status: action.itemsFetchDataSuccess,
        data: action.result.res.data
      };
    case ITEMS_HAVE_ERROR:
      return { ...state, status: action.itemsHaveError, data: {} };
    default:
      return state;
  }
};

export const itemsFetchData = () => (dispatch: Dispatch) => {
  // return dispatch => {
  //   dispatch(itemsAreLoading(true));

  //   axios
  //     .get(url)
  //     .then(response => {
  //       if (response.status !== 200) {
  //         throw Error(response.statusText);
  //       }

  //       dispatch(itemsAreLoading(false));
  //       return response;
  //     })
  //     .then(response => dispatch(itemsFetchDataSuccess(response.data)))
  //     .catch(() => dispatch(itemsHaveError(true)));
  // };
  dispatch({
    types: [ITEMS_ARE_LOADING, ITEMS_FETCH_DATA_SUCCESS, ITEMS_HAVE_ERROR],
    promise: () =>
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}`,
        headers: {
          "content-type": "application/json"
        }
      })
        .then(res => {
          return { res };
        })
        .catch(error => console.log(error))
  });
};
