import { actionKeyType } from "../constants";

const initialState = {
  loading: false,
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeyType.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionKeyType.GET_TAGS:
      return {
        ...state,
        loading: false,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export default tagReducer;
