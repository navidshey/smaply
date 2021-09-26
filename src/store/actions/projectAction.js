// import axios from "axios";
import { actionKeyType } from "../constants";


export const getProjects = () => (dispatch) => {
  dispatch(setLoading());

  // axios.get(apiRoutes.getProjects)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], projects));
    }, 1500);})
  .then((response) =>
    dispatch({
      type: actionKeyType.GET_PROJECTS,
      payload: response,
    })
  )
  .catch(() =>
    dispatch({
      type: actionKeyType.Project_Error,
      payload: "error in loading data !",
    })
  );
};

export const addTag = (projectId, tag)=> (dispatch)=>{
    // axios
  //   .post(apiRoutes.getTags, body: {tags: tag})
    new Promise((resolve) => {
    setTimeout(() => {
      resolve(tag)
    }, 500);})
    .then((response) =>{
      var prj = projects.find(x=>x.id == projectId);
      prj.tags = response.map(x=> x.id);
      let result = projects.filter(x=>x.id != projectId);
      result.push(prj);
      dispatch({
        type: actionKeyType.ADD_TAG,
        payload: result.sort(function(a, b){return  a.id - b.id})
      })
    })
    .catch(() =>
      dispatch({
        type: actionKeyType.ADD_TAG_ERROR,
        payload: "Error in adding tag!",
      })
    );
}

const setLoading = () => {
  return {
    type: actionKeyType.LOADING,
  };
};

const projects = [
  {
    id: "1",
    title: "project 1",
    color: "blue",
    updateAt: "2021/02/01",
    tags: [0, 1],
  },
  {
    id: "2",
    title: "project 2",
    color: "grey",
    updateAt: "2021/02/01",
    tags: [2],
  },
  {
    id: "3",
    title: "project 3",
    color: "orange",
    updateAt: "2019/02/01",
    tags: [1, 4],
  },
  {
    id: "4",
    title: "project 4",
    color: "green",
    updateAt: "2022/02/01",
    tags: [5, 3],
  },
  {
    id: "5",
    title: "project 5",
    color: "red",
    updateAt: "2020/02/01",
    tags: [4, 5],
  },
];
