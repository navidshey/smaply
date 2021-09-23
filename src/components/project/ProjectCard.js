import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { PropTypes } from "prop-types";
import TagList from "../tag/TagList";
import TagAdd from "./../tag/TagAdd";
// import useHover from "./../../hooks/useHover";

export default function ProjectCard({ color, title, updateAt, tags }) {
  //TODO: it is better to use 'usehover' hook which is reusable but has a bug on option hover
  // const hoverRef = useRef(null);
  // const isHover = useHover(hoverRef);
  const [isShown, setIsShown] = useState(false);
  const cardBackground = color ?? "blue";
  return (
    // <Card sx={{ maxWidth: 1 }} ref={hoverRef}>
    <Card
      sx={{ maxWidth: 1 }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <CardMedia sx={{ background: cardBackground }}>
        <Typography sx={{ pt: 12, pl: 2, pb: 3 }} color="white">
          {title}
        </Typography>
      </CardMedia>
      <CardContent>
        {!isShown && <TagList selected={tags}></TagList>}
        {isShown && <TagAdd selected={tags}></TagAdd>}
      </CardContent>
      <CardActions disableSpacing>
        <Typography>LAST CHANGES {updateAt}</Typography>
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  updateAt: PropTypes.string.isRequired,
  tags: PropTypes.array,
};
