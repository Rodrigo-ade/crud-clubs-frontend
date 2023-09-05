import React from "react";

function ListedTeam() {
  return (
    <li className="list-group-item listed-club">
      <div className="row">
        <div className="col align-self-center">
          <h3>Arsenal FC</h3>
        </div>
        <div className="col align-self-center">
          <a href="/clubs/ARS"><button className="btn btn-sm btn-success m-1">Info</button></a>
          <a href="/edit/clubs/ARS"><button className="btn btn-sm btn-info m-1">Edit</button></a>
          <button className="btn btn-sm btn-warning m-1">Remove</button>
        </div>
        <div className="col align-self-center">
          <img className="listed-club-image" alt="Arsenal FC" src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"></img>
        </div>
      </div>
    </li>
  );
}

export default ListedTeam;
