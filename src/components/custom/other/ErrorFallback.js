import React from "react";
import { PropTypes } from "prop-types";

export default function ErrorFallback({ error }) {
  return (
    <div role="alert" >
      <p>Error Boundary</p>
      <pre style={{ color: "red" }}>{error}</pre>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
};
