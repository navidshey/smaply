import React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../store/actions/projectAction";
import Spinner from "./../custom/Spinner/Spinner";

export default function ProjectList() {
  const projectDispatch = useDispatch();
  const { projects, loading, error } = useSelector((state) => state.projects);
  const isFirstRender = React.useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      projectDispatch(getProjects());
    }
  }, []);

  return (
    <Grid container spacing={1}>
      {error && <div> error in loading </div>}
      {loading && !projects && <Spinner></Spinner>}
      {projects &&
        projects.map((project) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <ProjectCard
                title={project.title}
                tags={project.tags}
                color={project.color}
                updateAt={project.updateAt}
              ></ProjectCard>
            </Grid>
          );
        })}
    </Grid>
  );
}
