import React from "react";
import CustomComboBox from "./../custom/CustomCombobox";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { getTags } from "./../../store/actions/tagAction";

export default function TagAdd({ selected }) {
  const tagDispatch = useDispatch();
  const { tags, loading } = useSelector((state) => state.tags);
  const isFirstRender = React.useRef(true);

  useEffect(() => {
    if (isFirstRender.current && !tags) {
      isFirstRender.current = false;
      tagDispatch(getTags());
    }
  }, []);

  return (
    <>
      {loading && !tags && <div>Loading tags ...</div>}
      {tags && (
        <CustomComboBox
          id="2"
          options={tags}
          defaultValue={tags.filter((tag) => selected.find((x) => x == tag.id))}
          label="PROJECT TAGS"
          placeholder="ADD TAGS"
          multiLine={true}
          size="small"
          placeHolder="Add"
          variant="filled"
        ></CustomComboBox>
      )}
    </>
  );
}

TagAdd.propTypes = {
  selected: PropTypes.array,
};
