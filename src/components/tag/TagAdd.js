import React from "react";
import CustomComboBox from "../custom/comboBox/CustomCombobox";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { getTags } from "./../../store/actions/tagAction";
import { addTag } from "./../../store/actions/projectAction";

export default function TagAdd({ selected, projectId }) {
  const tagDispatch = useDispatch();
  const { tags, error, loading } = useSelector((state) => state.tags);
  const isFirstRender = React.useRef(true);

     const addTagDispatch = useDispatch();

  const onTagsChange = (event, values) => {
     addTagDispatch(addTag(projectId, values));
  }


  useEffect(() => {
    
    if (isFirstRender.current && !tags) {
      isFirstRender.current = false;
      tagDispatch(getTags());
    }
  }, []);

  return (
    <>
      
      {error && <div>{error}</div>}
      {loading && <div>Loading tags ...</div>}
      {tags && (
        <CustomComboBox
          id="2"
          options={tags}
          onChange={onTagsChange}
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
  projectId: PropTypes.string,
};
