import React, { createContext, useState } from 'react';
import { PropTypes } from "prop-types";

export const SnackbarContext = createContext({
  setSnackbar: () => {
  },
  snackbar: {}
});


export const SnackbarContainer = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    message: '',
    type: 'default'
  });

  const handleSnackbarSet = (message, type = 'default') => {
    setSnackbar({
      message, type
    })
  };

  const contextValue = {
    setSnackbar: handleSnackbarSet,
    snackbar
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
    </SnackbarContext.Provider>
  )
};


SnackbarContainer.propTypes = {
  children: PropTypes.object
};