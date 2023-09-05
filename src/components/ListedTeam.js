import React from "react";

function ListedTeam(props) {
  return (
    <li className="list-group-item listed-club">
      <div className="row">
        <div className="col align-self-center">
          <h3>{props.name}</h3>
        </div>
        <div className="col align-self-center">
          <a href={`/clubs/${props.tla}`}><button className="btn btn-sm btn-success m-1">Info</button></a>
          <a href={`/edit/clubs/${props.tla}`}><button className="btn btn-sm btn-info m-1">Edit</button></a>
          <button className="btn btn-sm btn-warning m-1">Remove</button>
        </div>
        <div className="col align-self-center">
          <img className="listed-club-image" alt={`${props.name} logo`} src={props.crestUrl}></img>
        </div>
      </div>
    </li>
  );
}

export default ListedTeam;
