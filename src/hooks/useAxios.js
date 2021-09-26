import { useState, useEffect } from "react";
import axios from "axios";
import { apiRoutes } from "../store/constants";

axios.defaults.baseURL = "https://api.smaply.com";

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const callApi = () => {
    // axios[method](url, JSON.parse(headers), JSON.parse(body))
    getData(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    callApi();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;


function getData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = url == apiRoutes.getProjects ? projects : tags;
      resolve(Object.assign([], data));
    }, 1500);
  });
}

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