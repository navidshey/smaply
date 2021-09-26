import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250)",
    },
  },
}));

export default function CustomTextField({
  id,
  label,
  placeHolder,
  value,
  rows,
  onChange,
  variant,
  ...params
}) {
  const classes = useStyles();
  return (
    <TextField
      id={id ?? `${label}-textfield`}
      className={classes.root}
      label={label}
      placeholder={placeHolder}
      multiline
      size="small"
      rows={rows ?? "2"}
      value={value}
      onChange={onChange}
      variant={variant ?? "filled"}
      {...params}
    />
  );
}

CustomTextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  params: PropTypes.object,
  rows: PropTypes.number,
};
