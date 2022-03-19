import React from "react";

export const LoadingFunctionalComponent = ({ text }, props) => {
  return (
    <div className="d-flex justify-content-center row">
      <div className="spinner-border text-primary" role="status"></div>
      <div className="text-center">{text}</div>
    </div>
  );
};
