import React from "react";
import Location from "../components/Location";

function Team() {
  return (
    <div className="container club text-center mt-1 mb-5">
      <div className="row p-5">
        <div className="col align-self-center mb-5">
          <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" alt="Arsenal logo"></img>
          <h1>Arsenal FC</h1>
          <h5><strong>England</strong>, Founded in <strong>1889</strong></h5>
          <p><a href="http://www.arsenal.com" target="_blank" rel="noreferrer" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Official Website</a></p>
        </div>
        <Location/>
      </div>
      <div className="row">
        <div className="col text-start mt-1 p-3">
          <p><strong>+44 (020) 76195003</strong></p>
          <p><strong>info@arsenal.co.uk</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
