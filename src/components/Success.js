import React from "react";

function Success() {
  return(
    <div className="success">
      <h1 className="text-center mt-5">Your request has been successfully completed!</h1>
      <div className="text-center">
        <a href="/"><button className="btn btn-outline-warning mt-5 btn-lg">Go back to teams</button></a>
      </div>
    </div>
  );
}

export default Success;
