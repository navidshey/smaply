import React, {useContext } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTags } from "./../../store/actions/tagAction";
import { SnackbarContext } from './../../context/SnackbakContext';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TagList({ selected }) {
  const tagDispatch = useDispatch();
  const { tags, error, loading } = useSelector((state) => state.tags);
  const isFirstRender = React.useRef(true);
  const { setSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    if (isFirstRender.current && !tags) {
      isFirstRender.current = false;
      tagDispatch(getTags());
       setSnackbar('Tags are Fetching!');
    }
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          {error && <div> {error} </div> }
          {loading && !tags && <div>Loading tags ...</div>}
          {tags &&
            tags
              .filter((tag) => selected.find((x) => x == tag.id))
              .map((tag) => {
                return (
                  <Chip
                    key={tag.title}
                    sx={{ m: 0.4 }}
                    size="small"
                    label={tag.title}
                  />
                );
              })}
              {tags && selected.length == 0 && <div> No tag selected</div>}
        </Item>
      </Grid>
    </Grid>
  );
}

TagList.propTypes = {
  selected: PropTypes.array,
};
