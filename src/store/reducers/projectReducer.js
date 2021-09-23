import { actionKeyType } from "../constants";

const initialState = {
  loading: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionKeyType.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionKeyType.GET_PROJECTS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
