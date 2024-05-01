import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="loading-circle">
          <div className="circle-progress"></div>
        </div>
        <h1 className="loading-text">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingPage;
