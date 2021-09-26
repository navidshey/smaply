import React from "react";
import PropTypes from "prop-types";
import Autocomplete from "@mui/material/Autocomplete";
import CustomTextField from "./../textField/CustomTextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";


export default function CustomComboBox({
  id,
  label,
  placeHolder,
  options,
  defaultValue,
  onChange
}) {

  return (
    <Autocomplete
      size="small"
      multiple
      id={id ?? `${label}-combobox`}
      onChange={onChange}
      options={options}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Stack direction="row" {...props}>
          <Box sx={{ width: "80%" }}>{option.title}</Box>
          <Box sx={{ width: "20%", textAlign: "right" }}>
            <BorderColorSharpIcon color="action" fontSize="small" />
            <DeleteSharpIcon color="action" fontSize="small" />
          </Box>
        </Stack>
      )}
      defaultValue={defaultValue}
      renderInput={(params) => (
        <CustomTextField
          id={id ?? `${label}-textfield`}
          label={label}
          placeholder={placeHolder}
          multiline={true}
           onChange={onChange}
          {...params}
        />
      )}
    />
  );
}

CustomComboBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  defaultValue: PropTypes.array,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
