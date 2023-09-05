import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Location from '../components/Location.js';
import Loading from '../components/Loading.js';
import { getClub } from '../services/clubs.js';

function Team() {
  const [clubData, setClubData] = useState(null);
  let { clubTla } = useParams();
  
  useEffect(() => {
    getClub(clubTla).then((club) => {
        setClubData(club[0]);
    });
  },[clubTla]);

  const club = (
    <div className="container club-container text-center mt-1 mb-5">
      <div className="row p-2">
        <div className="col align-self-center mb-5">
          <img className="img-fluid" src={clubData && clubData.crestUrl} alt={`${clubData && clubData.crestUrl} logo`}></img>
          <h1>{clubData && clubData.name}</h1>
          <h5><strong>{clubData && clubData.area.name}</strong>, Founded in <strong>{clubData && clubData.founded}</strong></h5>
          <p><a href={clubData && clubData.website} target="_blank" rel="noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Official Website</a></p>
        </div>
        <Location address={clubData && clubData.address} venue={clubData && clubData.venue}/>
      </div>
      <div className="">
        <div className="col text-start mt-1 p-3">
          <p><strong>{clubData && clubData.phone}</strong></p>
          <p><strong>{clubData && clubData.email}</strong></p>
        </div>
        <div className="col mt-1 pb-5">
          <a href="/"><button className="btn btn-info">Back to clubs</button></a>
        </div>
      </div>
    </div>
  );

  return clubData ? club : <Loading/> ;
}

export default Team;
