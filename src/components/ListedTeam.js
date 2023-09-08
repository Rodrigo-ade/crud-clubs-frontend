import React, {useState} from "react";
import { deleteClub } from "../services/clubs";
import RemoveButton from '../components/RemoveButton';
import ActionButton from "./ActionButton";

function ListedTeam(props) {
  const [status, setStatus] = useState('');

  function handleRemove(tla) {
    deleteClub(tla).then((res) => {
      if (res.ok) {
        window.location.reload();
      }else {
        setStatus('error');
      }
    });
  }

  return (
    <li className="list-group-item listed-club">
      <div className="row">
        <div className="col align-self-center">
          <h5>{props.name}</h5>
        </div>
        <div className="col align-self-center">
          <a className="m-1" href={`/clubs/${props.tla}`}><ActionButton text='Info'></ActionButton></a>
          <a className="m-1" href={`/edit/clubs/${props.tla}`}><ActionButton text='Edit'></ActionButton></a>
          <RemoveButton onClick={() => handleRemove(`${props.tla}`)} >Remove</RemoveButton>
          <p style={{color:'red'}}>{status === 'error' && `Oops! try again later`}</p>
        </div>
        <div className="col align-self-center">
          <img className="listed-club-image" alt={`${props.name} logo`} src={props.crestUrl}></img>
        </div>
      </div>
    </li>
  );
}

export default ListedTeam;
