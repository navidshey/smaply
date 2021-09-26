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
        error: null,
        loading: false,
        projects: action.payload,
      };
          case actionKeyType.ADD_TAG:
        return {
          loading: false,
          error: null,
          projects: action.payload
        }
        case actionKeyType.ADD_TAG_ERROR:{
          return {
            ...state,
            loading: false,
            error:action.payload,
          }
        }
      case actionKeyType.PROJECT_ERROR:
        return {
          ...state,
          loading: false,
          projects: null,
          error: action.payload
        }
    default:
      return state;
  }
};

export default projectReducer;
