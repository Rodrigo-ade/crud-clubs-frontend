import React from "react";

function Loading() {
  return (
    <div className="container mt-5 text-center">
      <div className="row align-items-center">
        <div className="col mt-5">
          <div className="spinner-grow me-1" style={{width: "5rem", height: "5rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow me-1" style={{width: "5rem", height: "5rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow me-1" style={{width: "5rem", height: "5rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h1 className="mt-5">Please wait, loading...</h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;
