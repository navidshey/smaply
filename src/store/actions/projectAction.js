// import axios from "axios";
import { actionKeyType } from "../constants";

export const getProjects = () => (dispatch) => {
  dispatch(setLoading());

  setTimeout(function () {
    dispatch({
      type: actionKeyType.GET_PROJECTS,
      payload: projects,
    });
  }, 1500);
  // axios.get(apiRoutes.getProjects)
  // .then((response) =>
  //   dispatch({
  //     type: actionKeyType.GET_PROJECTS,
  //     payload: response.data,
  //   })
  // )
  // .catch(() =>
  //   dispatch({
  //     type: actionKeyType.Error,
  //     payload: "some thing wrong !",
  //   })
  // );
};

const setLoading = () => {
  return {
    type: actionKeyType.LOADING,
  };
};

const projects = [
  {
    title: "project 1",
    color: "blue",
    updateAt: "2021/02/01",
    tags: [0, 1],
  },
  {
    title: "project 2",
    color: "blue",
    updateAt: "2021/02/01",
    tags: [2],
  },
  {
    title: "project 3",
    color: "orange",
    updateAt: "2019/02/01",
    tags: [1, 4],
  },
  {
    title: "project 4",
    color: "green",
    updateAt: "2022/02/01",
    tags: [5, 3],
  },
  {
    title: "project 5",
    color: "red",
    updateAt: "2020/02/01",
    tags: [4, 5],
  },
];
