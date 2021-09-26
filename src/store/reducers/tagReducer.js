import { actionKeyType } from "../constants";

const initialState = {
  loading: false,
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeyType.LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionKeyType.GET_TAGS:
      return {
        ...state,
        loading: false,
        error: null,
        tags: action.payload,
      };
      case actionKeyType.TAG_ERROR:
        return {
          ...state,
          loading: false,
          tags: null,
          error: action.payload
        }
    default:
      return state;
  }
};

export default tagReducer;
