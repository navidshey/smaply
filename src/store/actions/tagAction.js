// import axios from "axios";
import { actionKeyType } from "../constants";

export const getTags = () => (dispatch) => {
  dispatch(setLoading());
  setTimeout(function () {
    dispatch({
      type: actionKeyType.GET_TAGS,
      payload: tags,
    });
  }, 1500);
  // axios
  //   .get(apiRoutes.getTags)
  //   .then((response) =>
  //     dispatch({
  //       type: actionKeyType.GET_TAGS,
  //       payload: response.data,
  //     })
  //   )
  //   .catch(() =>
  //     dispatch({
  //       type: actionKeyType.Error,
  //       payload: "some thing wrong !",
  //     })
  //   );
};

const setLoading = () => {
  return {
    type: actionKeyType.LOADING,
  };
};

const tags = [
  { id: 1, title: "The Shawshank Redemption" },
  { id: 2, title: "The Godfather" },
  { id: 3, title: "The Godfather: Part II" },
  { id: 4, title: "The Dark Knight" },
  { id: 5, title: "12 Angry Men" },
  { id: 6, title: "Schindler's List" },
  { id: 7, title: "Pulp Fiction" },
  { id: 8, title: "The Lord of the Rings: The Return of the King" },
];
